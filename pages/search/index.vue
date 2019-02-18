<template>
  <div class="row">
    <div class="col-md-3 col-sm-12"><h3>Results</h3></div>
    <div class="col-md-9 col-sm-12">
  
    </div>

    <div class="col-md-3 col-sm-12">
      <b-card no-body>
          <b-list-group flush>
            <b-list-group-item>
              <h5>Search</h5>
              <input id="prependedInput" class="form-control" size="16" type="text" placeholder="Search...">
            </b-list-group-item>  
            <b-list-group-item>
              <h5>Sort By</h5>
              <b-form-select  v-model="selectedSort"  :options="optionsSort" />
            </b-list-group-item>
            <b-list-group-item>
              <h5>Date</h5>
              <div class="form-group">
                <label >Start</label>
                <input type="date" name="bday" max="3000-12-31" 
                      min="1000-01-01" class="form-control">
              </div>
              <div class="form-group">
                <label >End</label>
                <input type="date" name="bday" min="1000-01-01"
                      max="3000-12-31" class="form-control">
              </div>
            </b-list-group-item>
            <b-list-group-item>
              <h5>Type</h5>
              <b-form-select v-model="selected" :options="options" />
            </b-list-group-item>
              <b-list-group-item>
                <b-button variant="outline-primary w-100">Apply Facets</b-button>
             </b-list-group-item>
          </b-list-group>
        </b-card>



    </div>
    <div class="col-md-9 col-sm-12">
      <div class="card" v-for="(result, index) in results" :key="index">
        <div class="card-body">
        <nuxt-link to="/search/detail">
          <h4>{{result.name}}</h4>
        </nuxt-link>
          {{result.description}}
        </div>
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
      ],
      selected: null,
      selectedSort: null,
        options: [
          { value: null, text: 'Publication' },
          { value: 'a', text: 'Grant' },
          { value: { C: '3PO' }, text: 'Data Set' },
          { value: 'b', text: 'Not Categorized' },
        ],
        optionsSort: [
          { value: null, text: 'Relevance' },
          { value: 'a', text: 'Date (Newest first)' },
          { value: { C: '3PO' }, text: 'Date (Oldest firsts)' },
        ]
    }
  }
}
</script>
