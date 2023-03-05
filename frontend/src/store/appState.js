import { defineStore } from "pinia";
import allPuzzles from "../data/puzzles.json"

export const useAppStateStore = defineStore("appState", {
  state: () => {
    return {
      currentPuzzleIndex: 0
    }
  },

  actions: {
    setPuzzleIndex(int) {
      this.currentPuzzleIndex = int
    },
    incrementPuzzleIndex() {
      if (allPuzzles.length === (this.currentPuzzleIndex + 1)) {
        this.currentPuzzleIndex = 0
      } else {
        this.currentPuzzleIndex++
      }
    }
  },
})