<template>
<div>
  <section>
    <input class="bus-input" :value="stopNumber" @input="updateStopNumber" placeholder="stopNumber">
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
  mounted () {
  },
  computed: {
    stopNumber () {
      return this.$store.state.storeStopNumber
    }
  }
}
</script>
