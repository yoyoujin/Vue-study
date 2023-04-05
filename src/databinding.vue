<!--
Here we are reactively binding element attributes / properties to the state.
The :title syntax is short for v-bind:title.
-->

<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
const isRed = ref(true)
const color = ref('green')

function toggleRed() {
  isRed.value = !isRed.value
}

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
}
</script>

<template>
  <p>
    <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
  </p>

  <!--
  class bindings have special support for objects and arrays
  in addition to plain strings
  -->
  <p :class="{ red: isRed }" @click="toggleRed">This should be red... but click me to toggle it.</p>

  <!-- style bindings also support object and arrays -->
  <p :style="{ color }" @click="toggleColor">
    This should be green, and should toggle between green and blue on click.
  </p>
</template>

<style>
.red {
  color: red;
}
</style>

<!--
:style="{ color }"은 뷰의 데이터 바인딩 기능을 사용하여 스타일을 동적으로 정의한다. color 변수는 ref 함수를 사용하여 반응형으로 선언되었으므로, 해당 변수의 값이 변경되면 스타일도 동적으로 업데이트된다.
여기서 중괄호({ })는 객체를 만들기 위한 단축 구문으로 사용된다. 

color 변수가 "green"으로 초기화되었으므로, 해당 요소의 텍스트 색상은 green 컬러가 된다. toggleColor() 함수가 실행될 때마다 color 변수가 "green"과 "blue" 중 하나로 변경되므로, 스타일도 그에 따라 변경된다.
-->
