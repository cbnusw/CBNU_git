(this.webpackJsonp=this.webpackJsonp||[]).push([[191],{113:function(t,e,n){"use strict";n.r(e);var r=n(88),a=n(70),s=n(96);document.addEventListener("DOMContentLoaded",(function(){Object(s.a)(document,gon),new r.a,new a.a}))},1163:function(t,e,n){"use strict";var r=n(0),a=n.n(r),s=n(16),i={data:function(){return{width:0,height:0}},beforeDestroy:function(){this.contentResizeHandler.off("content.resize",this.debouncedResize),window.removeEventListener("resize",this.debouncedResize)},created:function(){this.debouncedResize=Object(s.h)(this.onResize),this.contentResizeHandler=a()(document).on("content.resize",this.debouncedResize),window.addEventListener("resize",this.debouncedResize)},methods:{onResize:function(){var t=this.$refs.chartWrapper,e=t.clientWidth,n=t.clientHeight;this.width=e,this.height=n}}},o=n(4),c=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chartWrapper"},[this._t("default",null,{width:this.width,height:this.height})],2)}),[],!1,null,null,null);e.a=c.exports},2395:function(t,e,n){n(105),n(113),t.exports=n(2466)},2466:function(t,e,n){"use strict";n.r(e);var r=n(17),a=(n(40),n(46),n(18),n(41),n(210)),s=n.n(a),i=n(1),o=n(2531),c=n(62),u={props:{counts:{type:Object,required:!0}}},l=n(4),h=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("span",[t._v(t._s(t.s__("PipelineCharts|Total:")))]),t._v(" "),n("strong",[t._v(t._s(t.n__("1 pipeline","%d pipelines",t.counts.total)))])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.s__("PipelineCharts|Successful:")))]),t._v(" "),n("strong",[t._v(t._s(t.n__("1 pipeline","%d pipelines",t.counts.success)))])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.s__("PipelineCharts|Failed:")))]),t._v(" "),n("strong",[t._v(t._s(t.n__("1 pipeline","%d pipelines",t.counts.failed)))])]),t._v(" "),n("li",[n("span",[t._v(t._s(t.s__("PipelineCharts|Success ratio:")))]),t._v(" "),n("strong",[t._v(t._s(t.counts.successRatio)+"%")])])])}),[],!1,null,null,null).exports,d=n(2530),p=n(1163),f={components:{GlAreaChart:d.a,ResizableChartContainer:p.a},props:{chartData:{type:Array,required:!0}},areaChartOptions:{xAxis:{name:Object(i.d)("Pipeline|Date"),type:"category"},yAxis:{name:Object(i.d)("Pipeline|Pipelines")}},chartContainerHeight:300},b=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"prepend-top-default"},[n("p",[t._t("default")],2),t._v(" "),n("resizable-chart-container",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.width;return n("gl-area-chart",{attrs:{width:r,height:t.$options.chartContainerHeight,data:t.chartData,"include-legend-avg-max":!1,option:t.$options.areaChartOptions}})}}])})],1)}),[],!1,null,null,null).exports,m={components:{StatisticsList:h,GlColumnChart:o.a,PipelinesAreaChart:b},props:{counts:{type:Object,required:!0},timesChartData:{type:Object,required:!0},lastWeekChartData:{type:Object,required:!0},lastMonthChartData:{type:Object,required:!0},lastYearChartData:{type:Object,required:!0}},data:function(){return{timesChartTransformedData:{full:this.mergeLabelsAndValues(this.timesChartData.labels,this.timesChartData.values)}}},computed:{areaCharts:function(){var t=this.$options.chartTitles,e=t.lastWeek,n=t.lastMonth,r=t.lastYear;return[this.buildAreaChartData(e,this.lastWeekChartData),this.buildAreaChartData(n,this.lastMonthChartData),this.buildAreaChartData(r,this.lastYearChartData)]}},methods:{mergeLabelsAndValues:function(t,e){return t.map((function(t,n){return[t,e[n]]}))},buildAreaChartData:function(t,e){var n=e.labels,r=e.totals,a=e.success;return{title:t,data:[{name:"all",data:this.mergeLabelsAndValues(n,r)},{name:"success",data:this.mergeLabelsAndValues(n,a)}]}}},chartContainerHeight:300,timesChartOptions:{height:200,xAxis:{axisLabel:{rotate:45},nameGap:60}},get chartTitles(){var t=s()(new Date,"dd mmm"),e=function(t){return s()(Object(c.f)(new Date,t),"dd mmm")};return{lastWeek:Object(i.e)(Object(i.a)("Pipelines for last week (%{oneWeekAgo} - %{today})"),{oneWeekAgo:e(7),today:t}),lastMonth:Object(i.e)(Object(i.a)("Pipelines for last month (%{oneMonthAgo} - %{today})"),{oneMonthAgo:e(31),today:t}),lastYear:Object(i.a)("Pipelines for last year")}}},v=Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"my-4"},[t._v(t._s(t.s__("PipelineCharts|Overall statistics")))]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("statistics-list",{attrs:{counts:t.counts}})],1),t._v(" "),n("div",{staticClass:"col-md-6"},[n("strong",[t._v("\n        "+t._s(t.__("Duration for the last 30 commits"))+"\n      ")]),t._v(" "),n("gl-column-chart",{attrs:{height:t.$options.chartContainerHeight,option:t.$options.timesChartOptions,data:t.timesChartTransformedData,"y-axis-title":t.__("Minutes"),"x-axis-title":t.__("Commit"),"x-axis-type":"category"}})],1)]),t._v(" "),n("hr"),t._v(" "),n("h4",{staticClass:"my-4"},[t._v(t._s(t.__("Pipelines charts")))]),t._v(" "),t._l(t.areaCharts,(function(e,r){return n("pipelines-area-chart",{key:r,attrs:{"chart-data":e.data}},[t._v("\n    "+t._s(e.title)+"\n  ")])}))],2)}),[],!1,null,null,null).exports;document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("#js-project-pipelines-charts-app"),e=t.dataset,n=e.countsFailed,a=e.countsSuccess,s=e.countsTotal,i=e.successRatio,o=e.timesChartLabels,c=e.timesChartValues,u=e.lastWeekChartLabels,l=e.lastWeekChartTotals,h=e.lastWeekChartSuccess,d=e.lastMonthChartLabels,p=e.lastMonthChartTotals,f=e.lastMonthChartSuccess,b=e.lastYearChartLabels,m=e.lastYearChartTotals,g=e.lastYearChartSuccess,j=function(t,e,n){return{labels:JSON.parse(t),totals:JSON.parse(e),success:JSON.parse(n)}};return new r.default({el:t,name:"ProjectPipelinesChartsApp",components:{ProjectPipelinesCharts:v},render:function(t){return t(v,{props:{counts:{failed:n,success:a,total:s,successRatio:i},timesChartData:{labels:JSON.parse(o),values:JSON.parse(c)},lastWeekChartData:j(u,l,h),lastMonthChartData:j(d,p,f),lastYearChartData:j(b,m,g)}})}})}))},70:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(24),n(49),n(56),n(40),n(90),n(18),n(36),n(41);var r=n(8),a=n.n(r),s=n(9);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=o(this,c(e).call(this)),a.a.bind("g p",(function(){return Object(s.a)(".shortcuts-project")})),a.a.bind("g v",(function(){return Object(s.a)(".shortcuts-project-activity")})),a.a.bind("g r",(function(){return Object(s.a)(".shortcuts-project-releases")})),a.a.bind("g f",(function(){return Object(s.a)(".shortcuts-tree")})),a.a.bind("g c",(function(){return Object(s.a)(".shortcuts-commits")})),a.a.bind("g j",(function(){return Object(s.a)(".shortcuts-builds")})),a.a.bind("g n",(function(){return Object(s.a)(".shortcuts-network")})),a.a.bind("g d",(function(){return Object(s.a)(".shortcuts-repository-charts")})),a.a.bind("g i",(function(){return Object(s.a)(".shortcuts-issues")})),a.a.bind("g b",(function(){return Object(s.a)(".shortcuts-issue-boards")})),a.a.bind("g m",(function(){return Object(s.a)(".shortcuts-merge_requests")})),a.a.bind("g w",(function(){return Object(s.a)(".shortcuts-wiki")})),a.a.bind("g s",(function(){return Object(s.a)(".shortcuts-snippets")})),a.a.bind("g k",(function(){return Object(s.a)(".shortcuts-kubernetes")})),a.a.bind("g e",(function(){return Object(s.a)(".shortcuts-environments")})),a.a.bind("g l",(function(){return Object(s.a)(".shortcuts-metrics")})),a.a.bind("i",(function(){return Object(s.a)(".shortcuts-new-issue")})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t),e}(n(107).a)},73:function(t,e,n){"use strict";n(30),n(35),n(18),n(64);var r=n(0),a=n.n(r),s=n(32),i=(n(65),n(69),n(55),n(67),n(71));function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.projectSelectInput=a()(e),this.newItemBtn=a()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var e,r,s;return e=t,(r=[{key:"bindEvents",value:function(){var t=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(e){return t.openDropdown(e)})),this.newItemBtn.on("click",(function(e){t.getProjectFromLocalStorage()||(e.preventDefault(),t.openDropdown(e))})),this.projectSelectInput.on("change",(function(){return t.selectProject()}))}},{key:"initLocalStorage",value:function(){i.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(t){n.e(239).then(n.t.bind(null,428,7)).then((function(){a()(t.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))}},{key:"selectProject",value:function(){var t=JSON.parse(this.projectSelectInput.val()),e={url:"".concat(t.url,"/").concat(this.projectSelectInput.data("relativePath")),name:t.name};this.setNewItemBtnAttributes(e),this.setProjectInLocalStorage(e)}},{key:"setBtnTextFromLocalStorage",value:function(){var t=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(t)}},{key:"setNewItemBtnAttributes",value:function(t){t?(this.newItemBtn.attr("href",t.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(t.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var t=localStorage.getItem(this.localStorageKey);return JSON.parse(t)}},{key:"setProjectInLocalStorage",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.localStorageKey,e)}},{key:"deriveTextVariants",value:function(){var t=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:t,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&o(e.prototype,r),s&&o(e,s),t}(),u=n(1),l=function(){a()(".ajax-project-select").each((function(t,e){var n,r=this,i=a()(e).data("simpleFilter")||!1,o=a()(e).data("select2");return this.groupId=a()(e).data("groupId"),this.userId=a()(e).data("userId"),this.includeGroups=a()(e).data("includeGroups"),this.allProjects=a()(e).data("allProjects")||!1,this.orderBy=a()(e).data("orderBy")||"id",this.withIssuesEnabled=a()(e).data("withIssuesEnabled"),this.withMergeRequestsEnabled=a()(e).data("withMergeRequestsEnabled"),this.withShared=void 0===a()(e).data("withShared")||a()(e).data("withShared"),this.includeProjectsInSubgroups=a()(e).data("includeProjectsInSubgroups")||!1,this.allowClear=a()(e).data("allowClear")||!1,n=Object(u.d)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(u.d)("ProjectSelect| or group")),a()(e).select2({placeholder:n,minimumInputLength:0,query:function(t){var e,n=function(e){var n={results:e};return t.callback(n)};return e=r.includeGroups?function(e){return s.a.groups(t.term,{},(function(t){var r=t.concat(e);return n(r)}))}:n,r.groupId?s.a.groupProjects(r.groupId,t.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},e):r.userId?s.a.userProjects(r.userId,t.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},e):s.a.projects(t.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},e)},id:function(t){return i?t.id:JSON.stringify({name:t.name,url:t.web_url})},text:function(t){return t.name_with_namespace||t.name},initSelection:function(t,e){return s.a.project(t.val()).then((function(t){var n=t.data;return e(n)}))},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),o||i?e:new c(e)}))};e.a=function(){return n.e(239).then(n.t.bind(null,428,7)).then(l).catch((function(){}))}},88:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));n(42),n(89);var r=n(0),a=n.n(r),s=n(51),i=n.n(s),o=n(1),c=n(33);n(28),n(78),n(40),n(46),n(129),n(35),n(77),n(18),n(36),n(41);var u=function(t){return t.reduce((function(t,e){var n=e.name,r=e.value;return Object.assign(t,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,r))}),{})},l=n(11),h=n(14),d=n(73);function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=a()("ul.clone-options-dropdown"),n=a()("#project_clone"),r=a()(".js-git-clone-holder .js-clone-dropdown-label"),s=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),o=r.text().trim();o.length>0&&a()("a:contains('".concat(o,"')"),e).addClass("is-active"),a()("a",e).on("click",(function(t){t.preventDefault();var r=a()(t.currentTarget),i=r.attr("href"),o=r.data("cloneType");a()(".is-active",e).removeClass("is-active"),a()('a[data-clone-type="'.concat(o,'"]')).each((function(){var t=a()(this),e=t.find(".dropdown-menu-inner-title").text(),n=t.closest(".project-clone-holder").find(".js-clone-dropdown-label");t.toggleClass("is-active"),n.text(e)})),s?s.dataset.clipboardText=i:n.val(i),a()(".js-git-empty .js-clone").text(i)})),t.initRefSwitcher(),a()(".project-refs-select").on("change",(function(){return a()(this).parents("form").submit()})),a()(".hide-no-ssh-message").on("click",(function(t){return i.a.set("hide_no_ssh_message","false"),a()(this).parents(".no-ssh-key-message").remove(),t.preventDefault()})),a()(".hide-no-password-message").on("click",(function(t){return i.a.set("hide_no_password_message","false"),a()(this).parents(".no-password-message").remove(),t.preventDefault()})),a()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(t){var e=a()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(e);return i.a.set(n,"false"),a()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),t.preventDefault()})),t.projectSelectDropdown()}var e,n,r;return e=t,r=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),a()(".project-item-select").on("click",(function(e){return t.changeProject(a()(e.currentTarget).val())}))}},{key:"changeProject",value:function(t){return window.location=t}},{key:"initRefSwitcher",value:function(){var t=document.createElement("li"),e=document.createElement("a");return e.href="#",a()(".js-project-refs-dropdown").each((function(){var n,r,s,i=a()(this),d=i.data("selected"),p=i.data("fieldName"),f=Boolean(i.data("visit")),b=i.closest("form"),m=b.attr("action"),v=Object(c.h)((n=b[0],r=new FormData(n),s=Array.from(r.keys()).map((function(t){var e=r.getAll(t);return{name:t,value:1===(e=e.filter((function(t){return t}))).length?e[0]:e}})),u(s)),m);return i.glDropdown({data:function(t,e){l.a.get(i.data("refsUrl"),{params:{ref:i.data("ref"),search:t}}).then((function(t){var n=t.data;return e(n)})).catch((function(){return Object(h.a)(Object(o.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:i.data("inputFieldName"),fieldName:p,renderRow:function(n){var r,a,s,i=t.cloneNode(!1),o=e.cloneNode(!1);return n===d&&(o.className="is-active"),o.textContent=n,o.dataset.ref=n,n.length>0&&f&&(o.href=Object(c.h)((s=n,(a=p)in(r={})?Object.defineProperty(r,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[a]=s,r),v)),i.appendChild(o),i},id:function(t,e){return e.attr("data-ref")},toggleLabel:function(t,e){return e.text().trim()},clicked:function(t){var e=t.e;f||e.preventDefault()}})}))}}],(n=null)&&p(e.prototype,n),r&&p(e,r),t}()}},[[2395,1,0,2]]]);
//# sourceMappingURL=pages.projects.pipelines.charts.66364adb.chunk.js.map