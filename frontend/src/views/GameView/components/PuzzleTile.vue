<script setup>
const props = defineProps({
  text: String
})
</script>

<template>
  <div>{{ props.text }}</div>
</template>

<style scoped>
div {
  height: 32px;
  width: 32px;
}
</style>
