webpackJsonp([8],{"0Vhe":function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"animated fadeIn"},[e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-align-justify"}),e("strong",[a._v("Bootstrap Pagination")]),e("div",{staticClass:"card-actions"},[e("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/components/pagination",target:"_blank"}},[e("small",{staticClass:"text-muted"},[a._v("docs")])])])]),e("div",[e("h6",[a._v("Default")]),e("b-pagination",{attrs:{size:"md","total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("h6",[a._v("Small")]),e("b-pagination",{attrs:{size:"sm","total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("div",{staticClass:"d-sm-down-none"},[e("h6",[a._v("Large")]),e("b-pagination",{attrs:{size:"lg","total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br")],1),e("div",[a._v("currentPage: "+a._s(a.currentPage))])],1)]),e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-align-justify"}),e("strong",[a._v("Pagination")]),e("small",[a._v("alignment")])]),e("div",[e("h6",[a._v("Left alignment (default)")]),e("b-pagination",{attrs:{"total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("h6",[a._v("Center alignment")]),e("b-pagination",{attrs:{align:"center","total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("h6",[a._v("Right (end) alignment")]),e("b-pagination",{attrs:{align:"right","total-rows":100,"per-page":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("div",[a._v("currentPage: "+a._s(a.currentPage))])],1)]),e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[e("div",{attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-align-justify"}),e("strong",[a._v("Pagination")]),e("small",[a._v("navigation")]),e("div",{staticClass:"card-actions"},[e("a",{attrs:{href:"https://bootstrap-vue.js.org/docs/components/pagination",target:"_blank"}},[e("small",{staticClass:"text-muted"},[a._v("docs")])])])]),e("div",[e("h6",[a._v("Default")]),e("b-pagination-nav",{attrs:{"base-url":"#","number-of-pages":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("h6",{staticClass:"mt-4"},[a._v("With link generator function")]),e("b-pagination-nav",{attrs:{"link-gen":a.linkGen,"number-of-pages":10},model:{value:a.currentPage,callback:function(t){a.currentPage=t},expression:"currentPage"}}),e("br"),e("div",{staticClass:"mt-4"},[a._v("currentPage: "+a._s(a.currentPage))])],1)])],1)])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},rUkg:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("w8XS"),n=e("0Vhe"),s=!1;var i=function(a){s||e("s2Gi")},o=e("VU/8")(r.a,n.a,!1,i,"data-v-6bbf04d4",null);o.options.__file="pages/base/paginations.vue",t.default=o.exports},s2Gi:function(a,t,e){var r=e("xvYN");"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);e("rjj0")("77aa3816",r,!1,{sourceMap:!1})},w8XS:function(a,t,e){"use strict";t.a={name:"paginations",data:function(){return{currentPage:3}},methods:{linkGen:function(a){return"#page/"+a+"/foobar"}}}},xvYN:function(a,t,e){(a.exports=e("FZ+f")(!1)).push([a.i,"",""])}});