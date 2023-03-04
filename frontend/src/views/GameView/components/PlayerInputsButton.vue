<script setup>
import { useStore } from '../../../store/store';

const { puzzleState, appendToPuzzleState } = useStore()
const props = defineProps({
  text: String,
})
</script>

<template>
  <input
    type="button"
    :disabled="puzzleState.isPuzzleSolved"
    @click="appendToPuzzleState(props.text)"
    :value="props.text"
  />
</template>

<style scoped>
input {
  color: var(--primary-color-light);
  background-color: var(--primary-color-dark);
  border: none;
  padding: 8px;
}

input:disabled {
  opacity: 0.5;
}
</style>
