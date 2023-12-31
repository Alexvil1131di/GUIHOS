import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _38354ca8 = () => interopDefault(import('../pages/catalog.vue' /* webpackChunkName: "pages/catalog" */))
const _33a6f41c = () => interopDefault(import('../pages/conocenos.vue' /* webpackChunkName: "pages/conocenos" */))
const _6ba7e500 = () => interopDefault(import('../pages/directrices.vue' /* webpackChunkName: "pages/directrices" */))
const _f8838b4c = () => interopDefault(import('../pages/opcion1.vue' /* webpackChunkName: "pages/opcion1" */))
const _f8675c4a = () => interopDefault(import('../pages/opcion2.vue' /* webpackChunkName: "pages/opcion2" */))
const _f52449da = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _412342a1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/catalog",
    component: _38354ca8,
    name: "catalog"
  }, {
    path: "/conocenos",
    component: _33a6f41c,
    name: "conocenos"
  }, {
    path: "/directrices",
    component: _6ba7e500,
    name: "directrices"
  }, {
    path: "/opcion1",
    component: _f8838b4c,
    name: "opcion1"
  }, {
    path: "/opcion2",
    component: _f8675c4a,
    name: "opcion2"
  }, {
    path: "/test",
    component: _f52449da,
    name: "test"
  }, {
    path: "/",
    component: _412342a1,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
