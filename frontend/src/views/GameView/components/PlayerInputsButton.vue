<script setup>
const props = defineProps({
  text: String,
})
</script>

<template>
  <input type="button" :value="props.text" />
</template>

<style scoped>
</style>
