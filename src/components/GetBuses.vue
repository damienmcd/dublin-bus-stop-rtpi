<template>
<div>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <h2>Current route: {{ stopNumber }}</h2> <button @click="addAsFavourite">Add as Favourite</button>

    <div v-for="stop in favouriteStops" :key="stop">
      <button @click="this.stopNumber = stop">Show stop {{ stop }}</button>
    </div>

    <div v-if="loading">Loading...</div>

    <div v-else v-for="bus in info" :key="bus.arrivaldatetime" class="bus">
      {{ bus.route }}: Towards {{ bus.destination }}
      <span class="lighten" v-if="bus.duetime === 'Due'">
        is Due Now
      </span>
      <span class="lighten" v-else-if="bus.duetime == 1">
        {{ bus.duetime }} minute
      </span>
      <span class="lighten" v-if="bus.duetime > 1">
        {{ bus.duetime }} minutes
      </span>
    </div>

    <div class="cta-refresh">
      <button @click="getBuses">Refresh</button>
    </div>

  </section>
</div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'get-buses',
  data () {
    return {
      info: null,
      loading: true,
      favouriteStops: [],
      errored: false
    }
  },
  props: [
    'stopNumber'
  ],
  methods: {
    getBuses: function () {
      this.loading = true
      axios
        .get('https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=' + this.stopNumber + '&format=json')
        .then(response => {
          this.info = response.data.results
          this.loading = false
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    },
    addAsFavourite: function () {
      this.favouriteStops.push(this.stopNumber)
      localStorage.setItem('rtpiFavouriteStops', JSON.stringify(this.favouriteStops))
    }
  },
  watch: {
    stopNumber: _.debounce(function () {
      console.log(this.stopNumber)
      this.getBuses()
    }, 1000)
  },
  mounted () {
    this.getBuses()
    this.$options.interval = setInterval(this.getBuses, 60000)
    if (localStorage.getItem('rtpiFavouriteStops')) {
      this.favouriteStops = JSON.parse(localStorage.getItem('rtpiFavouriteStops'))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
