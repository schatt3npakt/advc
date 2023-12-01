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
      <button @click="clickHandler()">Continue</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: var(--primary-color-light);
  color: var(--primary-color-dark);
  font-size: 1.5rem;
  height: 100vh;
  inset: 0;
  padding: 1rem;
  position: fixed;
  width: 100vw;
  z-index: 1;
}

.wrapper .inner {
  padding: 8px;
  max-width: 360px;
  margin: auto;
}

.wrapper .inner p:not(:last-child) {
  margin-bottom: 64px;
}

button {
  background-color: var(--primary-color-dark);
  border: none;
  color: var(--primary-color-light);
  font-weight: bold;
  display: block;
  padding: 8px;
  width: 100%;
  font-size: 1.2rem;
}
</style>
