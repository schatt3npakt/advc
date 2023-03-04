<script setup>
const props = defineProps({
  text: String
})
</script>

<template>
  <div>
    {{ props.text }}
  </div>
</template>

<style scoped>
div {
  font-size: 0;
  margin: 0;
  padding: 0;
  position: fixed;
  left: -1000vw;
  top: -1000vw;
  opacity: 0;
}
</style>
