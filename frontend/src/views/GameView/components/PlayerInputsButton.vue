<script setup>
import { usePuzzleStateStore } from '../../../store/puzzleState';

const puzzleState = usePuzzleStateStore()
const props = defineProps({
  text: String,
  type: String,
})

function clickHandler (handlerInput) {
  switch (props.type) {
    case "add":
      puzzleState.appendToPuzzleState(handlerInput)
      break;
    case "remove":
      puzzleState.removeFromPuzzleState()
      break;
  }
}
</script>

<template>
  <input
    type="button"
    :disabled="puzzleState.isPuzzleSolved"
    @click="clickHandler(props.text)"
    :value="props.text"
  />
</template>

<style scoped>
input {
  background-color: var(--primary-color-dark);
  border: none;
  color: var(--primary-color-light);
  display: block;
  padding: 8px;
  width: 100%;
}

input:disabled {
  opacity: 0.5;
}
</style>
