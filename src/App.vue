<template>
  <div id="app" class="app-wrapper">
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

:root {
  --grey: #e5e5e5;
  --dark-grey: #222222;
  --dark-grey-hover: #444444;
  --yellow: #ffdf5f;
  --blue: #009ee0;
  --green: #2E8B57;
  --red: #b22222;
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background-color: var(--grey);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-wrapper {
  width: 100%;
  max-width: 500px;
  margin: 60px auto;
  padding: 20px 5% 40px;
  background-color: var(--yellow);
  border: solid 1px var(--dark-grey);
}

h1 {
  color: var(--blue);
  text-transform: uppercase;
}

.btn {
  display: block;
  margin: 10px auto 10px;
  width: 150px;
  height: 40px;
  background: var(--dark-grey);
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  border: none;
  transition: all 0.2s ease-out;
}
.btn:hover, .btn:active, .btn:focus {
  background-color: var(--dark-grey-hover);
  cursor: pointer;
}

.btn-util {
  width: auto;
  margin: 0px auto 10px;
  padding: 0px 10px;
}

.btn-fav-add {}
.btn-fav-show {
  display: inline-block;
  background-color: var(--green);
}
.btn-fav-remove {
  display: inline-block;
  background-color: var(--red);
}

.bus-list {
  margin: 10px auto;
  background-color: white;
  font-weight: 600;
}

.bus {
  padding: 10px 5%;
}
.bus-grey {
  background-color: var(--grey);
}

</style>






