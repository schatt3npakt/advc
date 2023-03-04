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

  const initialPuzzleState = {
    isPuzzleSolved: false,
    numberOfInputs: 0,
    state: [],
  }

  const puzzleState = ref(initialPuzzleState)

  function appendToPuzzleState (input) {
    puzzleState.value.state.push(input)
    checkForSuccess()
  }

  function removeFromPuzzleState () {
    puzzleState.value.state.pop()
  }

  function checkForSuccess () {
    puzzleState.value.isPuzzleSolved = puzzleState.value.state.join("") === puzzleConfig.value.solution

    // run success handler
    if (puzzleState.value.isPuzzleSolved === true) {
      window.setTimeout(() => {
        // TODO: Refactor this
        puzzleState.value.isPuzzleSolved = false
        puzzleState.value.numberOfInputs = 0
        puzzleState.value.state = []
      }, 1000)
    }
  }

  return {
    puzzleConfig,
    puzzleState,
    appendToPuzzleState,
    removeFromPuzzleState
  }
})