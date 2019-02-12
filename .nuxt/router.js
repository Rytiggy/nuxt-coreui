import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4b9de187 = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _32f3fefa = () => interopDefault(import('../pages/widgets.vue' /* webpackChunkName: "pages/widgets" */))
const _f1e64f7e = () => interopDefault(import('../pages/pages/404.vue' /* webpackChunkName: "pages/pages/404" */))
const _888a9504 = () => interopDefault(import('../pages/pages/500.vue' /* webpackChunkName: "pages/pages/500" */))
const _36d5b49c = () => interopDefault(import('../pages/pages/login.vue' /* webpackChunkName: "pages/pages/login" */))
const _26bebdea = () => interopDefault(import('../pages/pages/register.vue' /* webpackChunkName: "pages/pages/register" */))
const _7f1d4228 = () => interopDefault(import('../pages/search/detail.vue' /* webpackChunkName: "pages/search/detail" */))
const _474c1fb4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/search",
      component: _4b9de187,
      name: "search"
    }, {
      path: "/widgets",
      component: _32f3fefa,
      name: "widgets"
    }, {
      path: "/pages/404",
      component: _f1e64f7e,
      name: "pages-404"
    }, {
      path: "/pages/500",
      component: _888a9504,
      name: "pages-500"
    }, {
      path: "/pages/login",
      component: _36d5b49c,
      name: "pages-login"
    }, {
      path: "/pages/register",
      component: _26bebdea,
      name: "pages-register"
    }, {
      path: "/search/detail",
      component: _7f1d4228,
      name: "search-detail"
    }, {
      path: "/",
      component: _474c1fb4,
      name: "index"
    }],

    fallback: false
  })
}
