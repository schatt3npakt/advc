import { defineStore } from "pinia";
import allPuzzles from "../data/puzzles.json"

export const useAppStateStore = defineStore("appState", {
  state: () => {
    return {
      currentPuzzleIndex: 0,
      isEndlessModeEnabled: false
    }
  },

  actions: {
    setPuzzleIndex(int) {
      this.currentPuzzleIndex = int
    },
    incrementPuzzleIndex() {
      if (allPuzzles.length === (this.currentPuzzleIndex + 1)) {
        this.currentPuzzleIndex = false
        this.isEndlessModeEnabled = true
      } else {
        this.currentPuzzleIndex++
      }
    }
  },
})