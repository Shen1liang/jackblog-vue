webpackJsonp([5],{130:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(181),i=a.n(e),n=a(182),r=a(18)(i.a,n.a,null,null,null);s.default=r.exports},181:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=function(t){return t&&t.__esModule?t:{default:t}}(a(6)),i=a(11);s.default={computed:(0,e.default)({},(0,i.mapState)({apps:function(t){return t.apps.items}})),methods:(0,e.default)({},(0,i.mapActions)(["getApps"])),created:function(){this.getApps()}}},182:function(t,s,a){"use strict";var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"settings-box"},[a("div",{staticClass:"settings-container"},[a("h2",{staticClass:"title"},[t._v("App 下载")]),t._v(" "),a("hr"),t._v(" "),t._l(t.apps,function(s,e){return a("div",{key:e,staticClass:"row mobile-apps"},[a("p",{staticClass:"version"},[t._v(t._s(s.name)+"版 \n            "),a("a",{attrs:{href:s.gitUrl,target:"_blank"}},[a("i",{staticClass:"fa fa-github"})])]),t._v(" "),a("ul",{staticClass:"col-sm-7 downloads"},[a("li",[a("a",{staticClass:"btn btn-large btn-success",attrs:{href:s.downloadUrl.android||"javascript:;"}},[a("i",{staticClass:"fa fa-android"}),t._v(" "),a("span",[t._v("Android版")])])]),t._v(" "),a("li",[a("a",{staticClass:"btn btn-large btn-info",attrs:{href:s.downloadUrl.ios||"javascript:;"}},[a("i",{staticClass:"fa fa-mobile"}),t._v(" "),a("span",[t._v("iPhone版")])])])]),t._v(" "),a("div",{staticClass:"hidden-xs qrcode"},[a("img",{attrs:{src:s.qrcode,alt:"Download app qrcode"}})])])})],2)])},staticRenderFns:[]};s.a=e}});