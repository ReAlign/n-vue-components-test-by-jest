<template>
  <div id="app">
    <list :items="['list item 1', 'listen item 2']" />
  </div>
</template>

<script>
import List from '@/components/List.vue'

export default {
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
