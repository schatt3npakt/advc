<script setup>
import SrOnly from '../../../components/SrOnly.vue';
import { useStore } from '../../../store/store';
import PuzzleTile from "./PuzzleTile.vue";

const { puzzleState } = useStore();
</script>

<template>
  <SrOnly :text="'Your solution'" />
  <div class="row">
    <PuzzleTile
      v-for="(puzzleStateInput, index) in puzzleState.state"
      :key="index"
      :type="puzzleStateInput"
    />
  </div>
</template>

<style scoped>
.row {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
  margin-bottom: 8px;
  margin: auto;
  max-width: 100%;
  min-height: 32px;
  overflow: auto;
  padding: 0;
}

.row p {
  color: var(--primary-color-dark);
  margin: 0;
}
</style>
