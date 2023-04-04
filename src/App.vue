<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 :class="titleClass">빨간색으로 만들어 보세요</h1>
  <!-- 여기에 동적 클래스 바인딩 추가 -->
</template>

<style>
.title {
  color: red;
}
</style>
