<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <!-- <Sidebar :navItems="nav"/> -->
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container">
          <nuxt />
        </div>
      </main>
      <!-- <AppAside/> -->
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import nav from './menu'
import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from '~/components/'

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    AppFooter,
    Breadcrumb
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>

<style>


a {
    color: #5AABBC;
    text-decoration: none;
    background-color: transparent;
}
.bg-primary {
    background: #5AABBC!important;
}

.bg-danger {
    border-color: #C9972C!important;
    background: #C9972C!important;

}
.app-header.navbar .navbar-brand {
    background-size: 155px auto!important;
}
</style>