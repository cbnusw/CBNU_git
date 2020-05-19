module GitalyServer
  class RemoteService < Gitaly::RemoteService::Service
    include Utils

    def add_remote(request, call)
      repo = Gitlab::Git::Repository.from_gitaly(request.repository, call)

      mirror_refmap = parse_refmaps(request.mirror_refmaps)

      repo.add_remote(request.name, request.url, mirror_refmap: mirror_refmap)

      Gitaly::AddRemoteResponse.new
    end

    def fetch_internal_remote(request, call)
      repo = Gitlab::Git::Repository.from_gitaly(request.repository, call)
      remote_repo = Gitlab::Git::GitalyRemoteRepository.new(request.remote_repository, call)

      result = repo.fetch_repository_as_mirror(remote_repo)

      Gitaly::FetchInternalRemoteResponse.new(result: result)
    end

    def update_remote_mirror(call)
      request_enum = call.each_remote_read
      first_request = request_enum.next

      only_branches_matching = first_request.only_branches_matching.to_a
      only_branches_matching += request_enum.flat_map(&:only_branches_matching)

      remote_mirror = Gitlab::Git::RemoteMirror.new(
        Gitlab::Git::Repository.from_gitaly(first_request.repository, call),
        first_request.ref_name,
        ssh_auth: Gitlab::Git::SshAuth.from_gitaly(first_request),
        only_branches_matching: only_branches_matching,
        keep_divergent_refs: first_request.keep_divergent_refs
      )

      remote_mirror.update

      Gitaly::UpdateRemoteMirrorResponse.new
    end
  end
end
