<template>
  <div id="app">
    <h1>Dublin Bus RTPI Info</h1>
    <change-route v-model="stopNumber"></change-route>
    <get-buses :stopNumber="stopNumber"></get-buses>

    <!-- <p>{{ store.state.storeStopNumber }}</p> -->
  </div>
</template>

<script>
import ChangeRoute from '@/components/ChangeRoute'
import GetBuses from '@/components/GetBuses'

export default {
  name: 'App',
  data () {
    return {
      stopNumber: 3656
    }
  },
  components: {
    ChangeRoute,
    GetBuses
  },
  methods: {
    onUpdateRoute: function (newRoute) {
      this.stopNumber = newRoute
    }
  }
}
</script>
