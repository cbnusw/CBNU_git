require 'numerizer' unless defined?(Numerizer)

module ChronicDuration

  extend self

  class DurationParseError < StandardError
  end

  # On average, there's a little over 4 weeks in month.
  FULL_WEEKS_PER_MONTH = 4

  @@raise_exceptions = false
  @@hours_per_day = 24
  @@days_per_month = 30

  def self.raise_exceptions
    !!@@raise_exceptions
  end

  def self.raise_exceptions=(value)
    @@raise_exceptions = !!value
  end

  def self.hours_per_day
    @@hours_per_day
  end

  def self.hours_per_day=(value)
    @@hours_per_day = value
  end

  def self.days_per_month
    @@days_per_month
  end

  def self.days_per_month=(value)
    @@days_per_month = value
  end

  # Given a string representation of elapsed time,
  # return an integer (or float, if fractions of a
  # second are input)
  def parse(string, opts = {})
    result = calculate_from_words(cleanup(string), opts)
    (!opts[:keep_zero] and result == 0) ? nil : result
  end

  # Given an integer and an optional format,
  # returns a formatted string representing elapsed time
  def output(seconds, opts = {})
    int = seconds.to_i
    seconds = int if seconds - int == 0 # if seconds end with .0

    opts[:format] ||= :default
    opts[:keep_zero] ||= false

    hours_per_day = opts[:hours_per_day] || ChronicDuration.hours_per_day
    days_per_month = opts[:days_per_month] || ChronicDuration.days_per_month
    days_per_week = days_per_month / FULL_WEEKS_PER_MONTH

    years = months = weeks = days = hours = minutes = 0

    decimal_places = seconds.to_s.split('.').last.length if seconds.is_a?(Float)

    minute = 60
    hour = 60 * minute
    day = hours_per_day * hour
    month = days_per_month * day
    year = 31557600

    if seconds >= 31557600 && seconds%year < seconds%month
      years = seconds / year
      months = seconds % year / month
      days = seconds % year % month / day
      hours = seconds % year % month % day / hour
      minutes = seconds % year % month % day % hour / minute
      seconds = seconds % year % month % day % hour % minute
    elsif seconds >= 60
      minutes = (seconds / 60).to_i
      seconds = seconds % 60
      if minutes >= 60
        hours = (minutes / 60).to_i
        minutes = (minutes % 60).to_i
        if !opts[:limit_to_hours]
          if hours >= hours_per_day
            days = (hours / hours_per_day).to_i
            hours = (hours % hours_per_day).to_i
            if opts[:weeks]
              if days >= days_per_week
                weeks = (days / days_per_week).to_i
                days = (days % days_per_week).to_i
                if weeks >= FULL_WEEKS_PER_MONTH
                  months = (weeks / FULL_WEEKS_PER_MONTH).to_i
                  weeks = (weeks % FULL_WEEKS_PER_MONTH).to_i
                end
              end
            else
              if days >= days_per_month
                months = (days / days_per_month).to_i
                days = (days % days_per_month).to_i
              end
            end
          end
        end
      end
    end

    joiner = opts.fetch(:joiner) { ' ' }
    process = nil

    case opts[:format]
    when :micro
      dividers = {
        :years => 'y', :months => 'mo', :weeks => 'w', :days => 'd', :hours => 'h', :minutes => 'm', :seconds => 's' }
      joiner = ''
    when :short
      dividers = {
        :years => 'y', :months => 'mo', :weeks => 'w', :days => 'd', :hours => 'h', :minutes => 'm', :seconds => 's' }
    when :default
      dividers = {
        :years => ' yr', :months => ' mo', :weeks => ' wk', :days => ' day', :hours => ' hr', :minutes => ' min', :seconds => ' sec',
        :pluralize => true }
    when :long
      dividers = {
        :years => ' year', :months => ' month', :weeks => ' week', :days => ' day', :hours => ' hour', :minutes => ' minute', :seconds => ' second',
        :pluralize => true }
    when :chrono
      dividers = {
        :years => ':', :months => ':', :weeks => ':', :days => ':', :hours => ':', :minutes => ':', :seconds => ':', :keep_zero => true }
      process = lambda do |str|
        # Pad zeros
        # Get rid of lead off times if they are zero
        # Get rid of lead off zero
        # Get rid of trailing :
        divider = ':'
        str.split(divider).map { |n|
          # add zeros only if n is an integer
          n.include?('.') ? ("%04.#{decimal_places}f" % n) : ("%02d" % n)
        }.join(divider).gsub(/^(00:)+/, '').gsub(/^0/, '').gsub(/:$/, '')
      end
      joiner = ''
    end

    result = [:years, :months, :weeks, :days, :hours, :minutes, :seconds].map do |t|
      next if t == :weeks && !opts[:weeks]
      num = eval(t.to_s)
      num = ("%.#{decimal_places}f" % num) if num.is_a?(Float) && t == :seconds
      keep_zero = dividers[:keep_zero]
      keep_zero ||= opts[:keep_zero] if t == :seconds
      humanize_time_unit( num, dividers[t], dividers[:pluralize], keep_zero )
    end.compact!

    result = result[0...opts[:units]] if opts[:units]

    result = result.join(joiner)

    if process
      result = process.call(result)
    end

    result.length == 0 ? nil : result

  end

private

  def humanize_time_unit(number, unit, pluralize, keep_zero)
    return nil if number == 0 && !keep_zero
    res = "#{number}#{unit}"
    # A poor man's pluralizer
    res << 's' if !(number == 1) && pluralize
    res
  end

  def calculate_from_words(string, opts)
    val = 0
    words = string.split(' ')
    words.each_with_index do |v, k|
      if v =~ float_matcher
        val += (convert_to_number(v) * duration_units_seconds_multiplier(words[k + 1] || (opts[:default_unit] || 'seconds'), opts))
      end
    end
    val
  end

  def cleanup(string)
    res = string.downcase
    res = filter_by_type(Numerizer.numerize(res))
    res = res.gsub(float_matcher) {|n| " #{n} "}.squeeze(' ').strip
    res = filter_through_white_list(res)
  end

  def convert_to_number(string)
    string.to_f % 1 > 0 ? string.to_f : string.to_i
  end

  def duration_units_list
    %w(seconds minutes hours days weeks months years)
  end

  def duration_units_seconds_multiplier(unit, opts)
    return 0 unless duration_units_list.include?(unit)

    hours_per_day = opts[:hours_per_day] || ChronicDuration.hours_per_day
    days_per_month = opts[:days_per_month] || ChronicDuration.days_per_month
    days_per_week = days_per_month / FULL_WEEKS_PER_MONTH

    case unit
    when 'years';   31557600
    when 'months';  3600 * hours_per_day * days_per_month
    when 'weeks';   3600 * hours_per_day * days_per_week
    when 'days';    3600 * hours_per_day
    when 'hours';   3600
    when 'minutes'; 60
    when 'seconds'; 1
    end
  end

  # Parse 3:41:59 and return 3 hours 41 minutes 59 seconds
  def filter_by_type(string)
    chrono_units_list = duration_units_list.reject {|v| v == "weeks"}
    if string.gsub(' ', '') =~ /#{float_matcher}(:#{float_matcher})+/
      res = []
      string.gsub(' ', '').split(':').reverse.each_with_index do |v,k|
        return unless chrono_units_list[k]
        res << "#{v} #{chrono_units_list[k]}"
      end
      res = res.reverse.join(' ')
    else
      res = string
    end
    res
  end

  def float_matcher
    /[0-9]*\.?[0-9]+/
  end

  # Get rid of unknown words and map found
  # words to defined time units
  def filter_through_white_list(string)
    res = []
    string.split(' ').each do |word|
      if word =~ float_matcher
        res << word.strip
        next
      end
      stripped_word = word.strip.gsub(/^,/, '').gsub(/,$/, '')
      if mappings.has_key?(stripped_word)
        res << mappings[stripped_word]
      elsif !join_words.include?(stripped_word) and ChronicDuration.raise_exceptions
        raise DurationParseError, "An invalid word #{word.inspect} was used in the string to be parsed."
      end
    end
    # add '1' at front if string starts with something recognizable but not with a number, like 'day' or 'minute 30sec'
    res.unshift(1) if res.length > 0 && mappings[res[0]]
    res.join(' ')
  end

  def mappings
    {
      'seconds' => 'seconds',
      'second'  => 'seconds',
      'secs'    => 'seconds',
      'sec'     => 'seconds',
      's'       => 'seconds',
      'minutes' => 'minutes',
      'minute'  => 'minutes',
      'mins'    => 'minutes',
      'min'     => 'minutes',
      'm'       => 'minutes',
      'hours'   => 'hours',
      'hour'    => 'hours',
      'hrs'     => 'hours',
      'hr'      => 'hours',
      'h'       => 'hours',
      'days'    => 'days',
      'day'     => 'days',
      'dy'      => 'days',
      'd'       => 'days',
      'weeks'   => 'weeks',
      'week'    => 'weeks',
      'wks'     => 'weeks',
      'wk'      => 'weeks',
      'w'       => 'weeks',
      'months'  => 'months',
      'mo'      => 'months',
      'mos'     => 'months',
      'month'   => 'months',
      'years'   => 'years',
      'year'    => 'years',
      'yrs'     => 'years',
      'yr'      => 'years',
      'y'       => 'years'
    }
  end

  def join_words
    ['and', 'with', 'plus']
  end
end
