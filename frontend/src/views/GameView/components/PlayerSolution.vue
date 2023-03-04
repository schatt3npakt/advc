<script setup>
import SrOnly from '../../../components/SrOnly.vue';
import { usePuzzleStateStore } from '../../../store/puzzleState';
import PuzzleTile from "./PuzzleTile.vue";

const puzzleState = usePuzzleStateStore();
</script>

<template>
  <div class="wrapper">
    <SrOnly :text="'Your solution'" />
    <div class="row">
      <PuzzleTile
        v-for="(puzzleStateInput, index) in puzzleState.state"
        :key="index"
        :type="puzzleStateInput"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin-bottom: 32px;
}
.row {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
  margin: auto;
  max-width: 100%;
  min-height: 32px;
  overflow: auto;
  padding: 0;
}

ul.row:not(:last-of-type) {
  margin-bottom: 8px;
}

.row p {
  color: var(--primary-color-dark);
  margin: 0;
}
</style>
