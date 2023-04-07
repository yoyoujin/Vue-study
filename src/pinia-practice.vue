<script lang="ts">
import { defineComponent } from 'vue'
import { useCounterStore } from './store/counter'

export default defineComponent({
  name: 'Counter',
  setup() {
    const counterStore = useCounterStore()

    return {
      count: counterStore.count,
      doubleCount: counterStore.doubleCount,
      increment: counterStore.increment,
      incrementAsync: counterStore.incrementAsync
    }
  }
})
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>
