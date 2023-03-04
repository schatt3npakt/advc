import { defineStore } from "pinia";
import { ref } from "vue"
import allPuzzles from "../data/puzzles.json"
import { usePuzzleConfigStore } from "./puzzleConfig";

export const useStore = defineStore("store", () => {
  const puzzleConfig = usePuzzleConfigStore();
  const appState = ref({
    currentPuzzleIndex: 0
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
    puzzleState.value.isPuzzleSolved = puzzleState.value.state.join("") === puzzleConfig.config.solution

    // run success handler
    if (puzzleState.value.isPuzzleSolved === true) {
      window.setTimeout(() => {
        // TODO: Refactor this
        puzzleState.value.isPuzzleSolved = false
        puzzleState.value.numberOfInputs = 0
        puzzleState.value.state = []

        if ((appState.value.currentPuzzleIndex + 1) < allPuzzles.length) {
          appState.value.currentPuzzleIndex++
        } else {
          appState.value.currentPuzzleIndex = 0
        }

        puzzleConfig.loadNewConfig(appState.value.currentPuzzleIndex)
      }, 1000)
    }
  }

  return {
    puzzleState,
    appendToPuzzleState,
    removeFromPuzzleState
  }
})