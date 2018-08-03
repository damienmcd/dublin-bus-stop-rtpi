<template>
<div>
  <section>
    <div class="bus-input-wrapper">
      <label for="stop-input" class="bus-input-label">Stop Number</label>
      <input id="stop-input" class="bus-input" :value="stopNumber" @input="updateStopNumber">
      <button class="btn btn-go" :value="stopNumber" @click="updateStopNumber">Go</button>
    </div>
  </section>
</div>
</template>

<script>

export default {
  name: 'change-route',
  data () {
    return {
    }
  },
  methods: {
    updateStopNumber (e) {
      this.$store.commit('updateStopNumber', e.target.value)
    }
  },
  computed: {
    stopNumber () {
      return this.$store.state.storeStopNumber
    }
  }
}
</script>
