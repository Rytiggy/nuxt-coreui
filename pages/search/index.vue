<template>
  <div class="">
    <h3>Results</h3>
    <div class="card" v-for="(result, index) in results" :key="index">
      <div class="card-body">
       <nuxt-link to="/search/detail">
        <h4>{{result.name}}</h4>
       </nuxt-link>
        {{result.description}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'colors',
  data() {
    return {
      results: [
        {
          name: 'Salt water levels in local lakes',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          id: 1
        },
        {
          name: 'Ocean sceicne report 2018',
          description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          id: 2
        }
      ]
    }
  }
}
</script>
