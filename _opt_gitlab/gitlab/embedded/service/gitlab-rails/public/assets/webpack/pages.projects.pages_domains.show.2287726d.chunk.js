(this.webpackJsonp=this.webpackJsonp||[]).push([[184],{113:function(e,t,n){"use strict";n.r(t);var r=n(88),o=n(70),a=n(96);document.addEventListener("DOMContentLoaded",(function(){Object(a.a)(document,gon),new r.a,new o.a}))},1138:function(e,t,n){"use strict";n(26),n(78),n(36),n(27);var r=n(306);function o(e,t){Array.from(document.querySelectorAll(e)).forEach((function(e){t?e.classList.remove("d-none"):e.classList.add("d-none")}))}t.a=function(){var e=document.querySelector(".js-auto-ssl-toggle-container");if(e){Object(r.a)(e,(function(e){o(".js-shown-unless-auto-ssl",!e),o(".js-shown-if-auto-ssl",e),Array.from(document.querySelectorAll(".js-enabled-unless-auto-ssl")).forEach((function(t){e?t.setAttribute("disabled","disabled"):t.removeAttribute("disabled")}))}))}}},2382:function(e,t,n){n(105),n(113),e.exports=n(2383)},2383:function(e,t,n){"use strict";n.r(t);var r=n(1138);document.addEventListener("DOMContentLoaded",r.a)},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(26),n(18),n(64),n(27);var r=n(0),o=n.n(r),a=n(14),i=n(1),c=n(16);function s(e,t){e.classList.toggle("is-checked",t)}function u(e,t,n){var r=Object(c.F)(t.value);s(e,!r),e.setAttribute("disabled",!0),e.classList.toggle("is-loading",!0),Promise.resolve(n(!r,e)).then((function(){t.setAttribute("value",!r)})).catch((function(){s(e,r)})).then((function(){e.removeAttribute("disabled"),e.classList.toggle("is-loading",!1),o()(t).trigger("trigger-change")})).catch((function(){Object(a.a)(Object(i.a)("Something went wrong when toggling the button"))}))}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e.querySelectorAll(".js-project-feature-toggle").forEach((function(e){var n=e.querySelector(".js-project-feature-toggle-input");s(e,Object(c.F)(n.value)),e.addEventListener("click",u.bind(null,e,n,t))}))}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(24),n(49),n(56),n(40),n(90),n(18),n(36),n(41);var r=n(8),o=n.n(r),a=n(9);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=c(this,s(t).call(this)),o.a.bind("g p",(function(){return Object(a.a)(".shortcuts-project")})),o.a.bind("g v",(function(){return Object(a.a)(".shortcuts-project-activity")})),o.a.bind("g r",(function(){return Object(a.a)(".shortcuts-project-releases")})),o.a.bind("g f",(function(){return Object(a.a)(".shortcuts-tree")})),o.a.bind("g c",(function(){return Object(a.a)(".shortcuts-commits")})),o.a.bind("g j",(function(){return Object(a.a)(".shortcuts-builds")})),o.a.bind("g n",(function(){return Object(a.a)(".shortcuts-network")})),o.a.bind("g d",(function(){return Object(a.a)(".shortcuts-repository-charts")})),o.a.bind("g i",(function(){return Object(a.a)(".shortcuts-issues")})),o.a.bind("g b",(function(){return Object(a.a)(".shortcuts-issue-boards")})),o.a.bind("g m",(function(){return Object(a.a)(".shortcuts-merge_requests")})),o.a.bind("g w",(function(){return Object(a.a)(".shortcuts-wiki")})),o.a.bind("g s",(function(){return Object(a.a)(".shortcuts-snippets")})),o.a.bind("g k",(function(){return Object(a.a)(".shortcuts-kubernetes")})),o.a.bind("g e",(function(){return Object(a.a)(".shortcuts-environments")})),o.a.bind("g l",(function(){return Object(a.a)(".shortcuts-metrics")})),o.a.bind("i",(function(){return Object(a.a)(".shortcuts-new-issue")})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),t}(n(107).a)},73:function(e,t,n){"use strict";n(30),n(35),n(18),n(64);var r=n(0),o=n.n(r),a=n(32),i=(n(65),n(69),n(55),n(67),n(71));function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=o()(t),this.newItemBtn=o()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,r,a;return t=e,(r=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(t){return e.openDropdown(t)})),this.newItemBtn.on("click",(function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))})),this.projectSelectInput.on("change",(function(){return e.selectProject()}))}},{key:"initLocalStorage",value:function(){i.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){n.e(239).then(n.t.bind(null,428,7)).then((function(){o()(e.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&c(t.prototype,r),a&&c(t,a),e}(),u=n(1),l=function(){o()(".ajax-project-select").each((function(e,t){var n,r=this,i=o()(t).data("simpleFilter")||!1,c=o()(t).data("select2");return this.groupId=o()(t).data("groupId"),this.userId=o()(t).data("userId"),this.includeGroups=o()(t).data("includeGroups"),this.allProjects=o()(t).data("allProjects")||!1,this.orderBy=o()(t).data("orderBy")||"id",this.withIssuesEnabled=o()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=o()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===o()(t).data("withShared")||o()(t).data("withShared"),this.includeProjectsInSubgroups=o()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=o()(t).data("allowClear")||!1,n=Object(u.d)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(u.d)("ProjectSelect| or group")),o()(t).select2({placeholder:n,minimumInputLength:0,query:function(e){var t,n=function(t){var n={results:t};return e.callback(n)};return t=r.includeGroups?function(t){return a.a.groups(e.term,{},(function(e){var r=e.concat(t);return n(r)}))}:n,r.groupId?a.a.groupProjects(r.groupId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):r.userId?a.a.userProjects(r.userId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):a.a.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},t)},id:function(e){return i?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return a.a.project(e.val()).then((function(e){var n=e.data;return t(n)}))},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),c||i?t:new s(t)}))};t.a=function(){return n.e(239).then(n.t.bind(null,428,7)).then(l).catch((function(){}))}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(42),n(89);var r=n(0),o=n.n(r),a=n(51),i=n.n(a),c=n(1),s=n(33);n(28),n(78),n(40),n(46),n(129),n(35),n(77),n(18),n(36),n(41);var u=function(e){return e.reduce((function(e,t){var n=t.name,r=t.value;return Object.assign(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,r))}),{})},l=n(11),d=n(14),f=n(73);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=o()("ul.clone-options-dropdown"),n=o()("#project_clone"),r=o()(".js-git-clone-holder .js-clone-dropdown-label"),a=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),c=r.text().trim();c.length>0&&o()("a:contains('".concat(c,"')"),t).addClass("is-active"),o()("a",t).on("click",(function(e){e.preventDefault();var r=o()(e.currentTarget),i=r.attr("href"),c=r.data("cloneType");o()(".is-active",t).removeClass("is-active"),o()('a[data-clone-type="'.concat(c,'"]')).each((function(){var e=o()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)})),a?a.dataset.clipboardText=i:n.val(i),o()(".js-git-empty .js-clone").text(i)})),e.initRefSwitcher(),o()(".project-refs-select").on("change",(function(){return o()(this).parents("form").submit()})),o()(".hide-no-ssh-message").on("click",(function(e){return i.a.set("hide_no_ssh_message","false"),o()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()})),o()(".hide-no-password-message").on("click",(function(e){return i.a.set("hide_no_password_message","false"),o()(this).parents(".no-password-message").remove(),e.preventDefault()})),o()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(e){var t=o()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return i.a.set(n,"false"),o()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()})),e.projectSelectDropdown()}var t,n,r;return t=e,r=[{key:"projectSelectDropdown",value:function(){Object(f.a)(),o()(".project-item-select").on("click",(function(t){return e.changeProject(o()(t.currentTarget).val())}))}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",o()(".js-project-refs-dropdown").each((function(){var n,r,a,i=o()(this),f=i.data("selected"),h=i.data("fieldName"),p=Boolean(i.data("visit")),b=i.closest("form"),g=b.attr("action"),m=Object(s.h)((n=b[0],r=new FormData(n),a=Array.from(r.keys()).map((function(e){var t=r.getAll(e);return{name:e,value:1===(t=t.filter((function(e){return e}))).length?t[0]:t}})),u(a)),g);return i.glDropdown({data:function(e,t){l.a.get(i.data("refsUrl"),{params:{ref:i.data("ref"),search:e}}).then((function(e){var n=e.data;return t(n)})).catch((function(){return Object(d.a)(Object(c.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:i.data("inputFieldName"),fieldName:h,renderRow:function(n){var r,o,a,i=e.cloneNode(!1),c=t.cloneNode(!1);return n===f&&(c.className="is-active"),c.textContent=n,c.dataset.ref=n,n.length>0&&p&&(c.href=Object(s.h)((a=n,(o=h)in(r={})?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,r),m)),i.appendChild(c),i},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){var t=e.e;p||t.preventDefault()}})}))}}],(n=null)&&h(t.prototype,n),r&&h(t,r),e}()}},[[2382,1,0,2]]]);
//# sourceMappingURL=pages.projects.pages_domains.show.2287726d.chunk.js.map