<script setup>
import PuzzleTile from './PuzzleTile.vue';
</script>

<template>
  <div class="row">
    <div>
      <span>1.</span>
    </div>
    <PuzzleTile />
    <PuzzleTile />
    <PuzzleTile />
    <PuzzleTile />
    <PuzzleTile />
    <PuzzleTile />
  </div>
</template>

<style scoped>
div {
  position: relative
}

.row {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 8px;
}

span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
