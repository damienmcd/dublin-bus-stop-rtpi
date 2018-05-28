<template>
<div>
  <section>
    <input v-bind:value="stopNumber" v-on:input="$emit('input', $event.target.value)" placeholder="stopNumber">
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
  props: {
    stopNumber: Number
  },
  methods: {
  },
  mounted () {
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
