import { defineStore } from "pinia";
import { ref } from "vue"

export const useStore = defineStore("store", () => {
  const puzzleConfig = ref({
    completionText: "Lorem Ipsum",
    initText: "Lorem Ipsum",
    maxInputs: 10,
    rows: [
      ["UP", "DOWN", "LEFT", "RIGHT", "RIGHT", "DOWN"]
    ],
    sorting: "3124",
    solution: "UPDOWNLEFTRIGHTRIGHTDOWN",
  })

  const puzzleState = ref({
    isPuzzleSolved: false,
    numberOfInputs: 0,
    state: [],
  })

  function appendToPuzzleState (input) {
    puzzleState.value.state.push(input)
    puzzleState.value.isPuzzleSolved = puzzleState.value.state.join("") === puzzleConfig.value.solution
  }

  function removeFromPuzzleState () {
    puzzleState.value.state.pop()
  }

  return {
    puzzleConfig,
    puzzleState,
    appendToPuzzleState,
    removeFromPuzzleState
  }
})