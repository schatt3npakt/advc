// stores/counter.js
import { defineStore } from 'pinia'
import { usePuzzleConfigStore } from "./puzzleConfig";
import { useAppStateStore } from "./appState";

export const usePuzzleStateStore = defineStore('puzzleState', {
  state: () => {
    return {
      isPuzzleSolved: false,
      numberOfInputs: 0,
      state: [],
    }
  },

  actions: {
    appendToPuzzleState (input) {
      const puzzleConfig = usePuzzleConfigStore();
      this.numberOfInputs++
      this.state.push(input)

      if (this.state.length === puzzleConfig.config.maxInputs) {
        this.checkForSuccess();
      }
    },
    removeFromPuzzleState () {
      this.state.pop()
    },
    checkForSuccess () {
      const puzzleConfig = usePuzzleConfigStore();
      const appState = useAppStateStore();
      this.isPuzzleSolved = this.state.join("") === puzzleConfig.config.solution
  
      // run success handler
      // move timout into app options store
      if (this.isPuzzleSolved === true) {
        // TODO: Refactor this
        this.isPuzzleSolved = false
        this.numberOfInputs = 0
        this.state = []

        appState.incrementPuzzleIndex()
        puzzleConfig.loadNewConfig(appState.currentPuzzleIndex)
      } else {
        this.numberOfInputs = 0
        this.state = []
      }
    }
  },
})
