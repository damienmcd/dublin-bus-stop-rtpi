<template>
  <div id="app">
    <h1>Dublin Bus RTPI Info</h1>
    <change-route></change-route>
    <get-buses></get-buses>
  </div>
</template>

<script>
import ChangeRoute from '@/components/ChangeRoute'
import GetBuses from '@/components/GetBuses'

export default {
  name: 'App',
  data () { return {} },
  components: {
    ChangeRoute,
    GetBuses
  },
  methods: {},
  computed: {
    stopNumber () {
      return this.$store.state.storeStopNumber
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
