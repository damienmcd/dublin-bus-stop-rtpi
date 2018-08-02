<template>
<div>
  <section>
    <label for="stop-input" class="bus-input-label">Input Stop Number</label>
    <input id="stop-input" class="bus-input" :value="stopNumber" @input="updateStopNumber" placeholder="Input stop number">
    <button class="btn btn-go" :value="stopNumber" @click="updateStopNumber">Go</button>
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
