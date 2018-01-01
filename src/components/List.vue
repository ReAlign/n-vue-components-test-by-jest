<template>
  <div>
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
    {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: [
    'items'
  ],
  data() {
    return {
      count: 1
    }
  },

  methods: {
    increment () {
      this.count++;
    }
  }
}
</script>
