webpackJsonp([26],{BRXq:function(t,a,r){"use strict";a.a={name:"standard-buttons",data:function(){return{myToggle:!1}}}},i2RM:function(t,a,r){"use strict";var s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"animated fadeIn"},[r("b-row",[r("b-col",{attrs:{md:"6"}},[r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Options")])]),r("b-button",{attrs:{variant:"primary"}},[t._v("Primary")]),r("b-button",{attrs:{variant:"secondary"}},[t._v("Secondary")]),r("b-button",{attrs:{variant:"success"}},[t._v("Success")]),r("b-button",{attrs:{variant:"warning"}},[t._v("Warning")]),r("b-button",{attrs:{variant:"danger"}},[t._v("Danger")]),r("b-button",{attrs:{variant:"link"}},[t._v("Link")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("With Icons")])]),r("b-button",{attrs:{variant:"primary"}},[r("i",{staticClass:"fa fa-star"}),t._v("  Primary")]),r("b-button",{attrs:{variant:"secondary"}},[r("i",{staticClass:"fa fa-lightbulb-o"}),t._v("  Secondary")]),r("b-button",{attrs:{variant:"success"}},[r("i",{staticClass:"fa fa-magic"}),t._v("  Success")]),r("b-button",{attrs:{variant:"warning"}},[r("i",{staticClass:"fa fa-map-marker"}),t._v("  Warning")]),r("b-button",{attrs:{variant:"danger"}},[r("i",{staticClass:"fa fa-rss"}),t._v("  Danger")]),r("b-button",{attrs:{variant:"link"}},[r("i",{staticClass:"fa fa-link"}),t._v("  Link")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Size Large")]),r("small",[t._v("Add this "),r("code",[t._v('size="lg"')])])]),r("b-button",{attrs:{size:"lg",variant:"primary"}},[t._v("Primary")]),r("b-button",{attrs:{size:"lg",variant:"secondary"}},[t._v("Secondary")]),r("b-button",{attrs:{size:"lg",variant:"success"}},[t._v("Success")]),r("b-button",{attrs:{size:"lg",variant:"info"}},[t._v("Info")]),r("b-button",{attrs:{size:"lg",variant:"warning"}},[t._v("Warning")]),r("b-button",{attrs:{size:"lg",variant:"danger"}},[t._v("Danger")]),r("b-button",{attrs:{size:"lg",variant:"link"}},[t._v("Link")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Size Small")]),r("small",[t._v("Add this "),r("code",[t._v('size="sm"')])])]),r("b-button",{attrs:{size:"sm",variant:"primary"}},[t._v("Primary")]),r("b-button",{attrs:{size:"sm",variant:"secondary"}},[t._v("Secondary")]),r("b-button",{attrs:{size:"sm",variant:"success"}},[t._v("Success")]),r("b-button",{attrs:{size:"sm",variant:"info"}},[t._v("Info")]),r("b-button",{attrs:{size:"sm",variant:"warning"}},[t._v("Warning")]),r("b-button",{attrs:{size:"sm",variant:"danger"}},[t._v("Danger")]),r("b-button",{attrs:{size:"sm",variant:"link"}},[t._v("Link")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Disabled state")]),r("small",[t._v("Add this "),r("code",[t._v(':disabled="true"')])])]),r("b-button",{attrs:{size:"lg",variant:"primary",disabled:!0}},[t._v("Primary")]),r("b-button",{attrs:{size:"lg",variant:"secondary",disabled:!0}},[t._v("Secondary")]),r("b-button",{attrs:{size:"lg",variant:"success",disabled:!0}},[t._v("Success")]),r("b-button",{attrs:{size:"lg",variant:"info",disabled:!0}},[t._v("Info")]),r("b-button",{attrs:{size:"lg",variant:"warning",disabled:!0}},[t._v("Warning")]),r("b-button",{attrs:{size:"lg",variant:"danger",disabled:!0}},[t._v("Danger")]),r("b-button",{attrs:{size:"lg",variant:"link",disabled:!0}},[t._v("Link")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Active state")]),r("small",[t._v("Add this "),r("code",[t._v(':active="true"')])])]),r("b-button",{attrs:{variant:"primary",active:!0}},[t._v("Primary")]),r("b-button",{attrs:{variant:"secondary",active:!0}},[t._v("Secondary")]),r("b-button",{attrs:{variant:"success",active:!0}},[t._v("Success")]),r("b-button",{attrs:{variant:"info",active:!0}},[t._v("Info")]),r("b-button",{attrs:{variant:"warning",active:!0}},[t._v("Warning")]),r("b-button",{attrs:{variant:"danger",active:!0}},[t._v("Danger")]),r("b-button",{attrs:{variant:"link",active:!0}},[t._v("Link")])],1),r("b-card",{attrs:{"header-tag":"header"}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Pressed state")]),r("small",[t._v("Add this "),r("code",[t._v(':pressed="true"')])])]),r("b-button",{attrs:{variant:"primary",pressed:!0}},[t._v("Primary")]),r("b-button",{attrs:{variant:"secondary",pressed:!0}},[t._v("Secondary")]),r("b-button",{attrs:{variant:"success",pressed:!0}},[t._v("Success")]),r("b-button",{attrs:{variant:"info",pressed:!0}},[t._v("Info")]),r("b-button",{attrs:{variant:"warning",pressed:!0}},[t._v("Warning")]),r("b-button",{attrs:{variant:"danger",pressed:!0}},[t._v("Danger")]),r("b-button",{attrs:{variant:"link",pressed:!0}},[t._v("Link")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Toggle pressed state")])]),r("b-button",{attrs:{variant:"primary",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Primary "+t._s(t.myToggle?"On ":"Off"))]),r("b-button",{attrs:{variant:"secondary",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Secondary "+t._s(t.myToggle?"On ":"Off"))]),r("b-button",{attrs:{variant:"success",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Success "+t._s(t.myToggle?"On ":"Off"))]),r("b-button",{attrs:{variant:"info",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Info "+t._s(t.myToggle?"On ":"Off"))]),r("b-button",{attrs:{variant:"warning",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Warning "+t._s(t.myToggle?"On ":"Off"))]),r("b-button",{attrs:{variant:"danger",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Danger "+t._s(t.myToggle?"On ":"Off"))])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Block Level Buttons")]),r("small",[t._v("Add this "),r("code",[t._v(':block="true"')])])]),r("b-button",{attrs:{size:"lg",variant:"secondary",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"primary",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"success",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"info",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"warning",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"danger",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"link",block:!0}},[t._v("Block level button")])],1)],1),r("b-col",{attrs:{md:"6"}},[r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Options")])]),r("b-button",{attrs:{variant:"outline-primary"}},[t._v("Primary")]),r("b-button",{attrs:{variant:"outline-secondary"}},[t._v("Secondary")]),r("b-button",{attrs:{variant:"outline-success"}},[t._v("Success")]),r("b-button",{attrs:{variant:"outline-warning"}},[t._v("Warning")]),r("b-button",{attrs:{variant:"outline-danger"}},[t._v("Danger")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("With Icons")])]),r("b-button",{attrs:{variant:"outline-primary"}},[r("i",{staticClass:"fa fa-star"}),t._v("  Primary")]),r("b-button",{attrs:{variant:"outline-secondary"}},[r("i",{staticClass:"fa fa-lightbulb-o"}),t._v("  Secondary")]),r("b-button",{attrs:{variant:"outline-success"}},[r("i",{staticClass:"fa fa-magic"}),t._v("  Success")]),r("b-button",{attrs:{variant:"outline-warning"}},[r("i",{staticClass:"fa fa-map-marker"}),t._v("  Warning")]),r("b-button",{attrs:{variant:"outline-danger"}},[r("i",{staticClass:"fa fa-rss"}),t._v("  Danger")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Size Large")]),r("small",[t._v("Add this "),r("code",[t._v('size="lg"')])])]),r("b-button",{attrs:{size:"lg",variant:"outline-primary"}},[t._v("Primary")]),r("b-button",{attrs:{size:"lg",variant:"outline-secondary"}},[t._v("Secondary")]),r("b-button",{attrs:{size:"lg",variant:"outline-success"}},[t._v("Success")]),r("b-button",{attrs:{size:"lg",variant:"outline-info"}},[t._v("Info")]),r("b-button",{attrs:{size:"lg",variant:"outline-warning"}},[t._v("Warning")]),r("b-button",{attrs:{size:"lg",variant:"outline-danger"}},[t._v("Danger")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Size Small")]),r("small",[t._v("Add this "),r("code",[t._v('size="sm"')])])]),r("b-button",{attrs:{size:"sm",variant:"outline-primary"}},[t._v("Primary")]),r("b-button",{attrs:{size:"sm",variant:"outline-secondary"}},[t._v("Secondary")]),r("b-button",{attrs:{size:"sm",variant:"outline-success"}},[t._v("Success")]),r("b-button",{attrs:{size:"sm",variant:"outline-info"}},[t._v("Info")]),r("b-button",{attrs:{size:"sm",variant:"outline-warning"}},[t._v("Warning")]),r("b-button",{attrs:{size:"sm",variant:"outline-danger"}},[t._v("Danger")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Disabled state")]),r("small",[t._v("Add this "),r("code",[t._v(':disabled="true"')])])]),r("b-button",{attrs:{variant:"outline-primary",disabled:!0}},[t._v("Primary")]),r("b-button",{attrs:{variant:"outline-secondary",disabled:!0}},[t._v("Secondary")]),r("b-button",{attrs:{variant:"success",disabled:!0}},[t._v("Success")]),r("b-button",{attrs:{variant:"outline-info",disabled:!0}},[t._v("Info")]),r("b-button",{attrs:{variant:"outline-warning",disabled:!0}},[t._v("Warning")]),r("b-button",{attrs:{variant:"outline-danger",disabled:!0}},[t._v("Danger")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Active state")]),r("small",[t._v("Add this "),r("code",[t._v(':active="true"')])])]),r("b-button",{attrs:{variant:"outline-primary",active:!0}},[t._v("Primary")]),r("b-button",{attrs:{variant:"outline-secondary",active:!0}},[t._v("Secondary")]),r("b-button",{attrs:{variant:"outline-success",active:!0}},[t._v("Success")]),r("b-button",{attrs:{variant:"outline-info",active:!0}},[t._v("Info")]),r("b-button",{attrs:{variant:"outline-warning",active:!0}},[t._v("Warning")]),r("b-button",{attrs:{variant:"outline-danger",active:!0}},[t._v("Danger")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Pressed state")]),r("small",[t._v("Add this "),r("code",[t._v(':pressed="true"')])])]),r("b-button",{attrs:{variant:"outline-primary",pressed:!0}},[t._v("Primary")]),r("b-button",{attrs:{variant:"outline-secondary",pressed:!0}},[t._v("Secondary")]),r("b-button",{attrs:{variant:"outline-success",pressed:!0}},[t._v("Success")]),r("b-button",{attrs:{variant:"outline-info",pressed:!0}},[t._v("Info")]),r("b-button",{attrs:{variant:"outline-warning",pressed:!0}},[t._v("Warning")]),r("b-button",{attrs:{variant:"outline-danger",pressed:!0}},[t._v("Danger")])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Toggle pressed state")])]),r("b-button",{attrs:{variant:"outline-primary",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Primary "+t._s(t.myToggle?"On ":"Off"))]),r("b-button",{attrs:{variant:"outline-secondary",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Secondary "+t._s(t.myToggle?"On ":"Off"))]),r("b-button",{attrs:{variant:"outline-success",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Success "+t._s(t.myToggle?"On ":"Off"))]),r("b-button",{attrs:{variant:"outline-info",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Info "+t._s(t.myToggle?"On ":"Off"))]),r("b-button",{attrs:{variant:"outline-warning",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Warning "+t._s(t.myToggle?"On ":"Off"))]),r("b-button",{attrs:{variant:"outline-danger",pressed:t.myToggle},on:{"update:pressed":function(a){t.myToggle=a}}},[t._v("Danger "+t._s(t.myToggle?"On ":"Off"))])],1),r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[t._v("Block Level Buttons")]),r("small",[t._v("Add this "),r("code",[t._v(':block="true"')])])]),r("b-button",{attrs:{size:"lg",variant:"outline-secondary",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"outline-primary",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"outline-success",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"outline-info",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"outline-warning",block:!0}},[t._v("Block level button")]),r("b-button",{attrs:{size:"lg",variant:"outline-danger",block:!0}},[t._v("Block level button")])],1)],1)],1)],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};a.a=n},s3Zo:function(t,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=r("BRXq"),n=r("i2RM"),e=r("VU/8")(s.a,n.a,!1,null,null,null);e.options.__file="pages/buttons/standard-buttons.vue",a.default=e.exports}});