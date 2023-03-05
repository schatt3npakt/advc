<script setup>
import { ref } from "vue";

const props = defineProps({
  text: String,
  show: Boolean
})

const showLayer = ref(props.show)

function clickHandler () {
  showLayer.value = false
}
</script>

<template>
  <div class="wrapper" v-show="showLayer">
    <div class="inner">
      <p>{{ props.text }}</p>
      <button @click="clickHandler()">Close layer</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: var(--primary-color-light);
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}

.wrapper .inner {
  padding: 8px;
}
</style>
