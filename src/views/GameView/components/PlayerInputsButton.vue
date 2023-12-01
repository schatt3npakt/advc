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

const keyMap = {
  "UP": "▲",
  "RIGHT": "▶",
  "DOWN": "▼",
  "LEFT": "◀",
  "DELETE": "DELETE",
}
</script>

<template>
  <button
    type="button"
    :disabled="puzzleState.isPuzzleSolved"
    @click="clickHandler(props.text)"
  >
    {{keyMap[props.text]}}
  </button>
</template>

<style scoped>
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

button:disabled {
  opacity: 0.5;
}
</style>
