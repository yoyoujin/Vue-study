<script setup>
import { ref } from 'vue'

// script setup 실행 시 해당 엘리먼트가 아직 존재하지 않기 때문에 우선 null값으로 초기화
const hello = ref(null)
</script>

<template>
  <p ref="hello">안녕</p>
</template>
