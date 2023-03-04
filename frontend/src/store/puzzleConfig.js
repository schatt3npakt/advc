// stores/counter.js
import { defineStore } from 'pinia'
import allPuzzles from "../data/puzzles.json"

export const usePuzzleConfigStore = defineStore('puzzleConfig', {
  state: () => {
    return {
      config: allPuzzles[0]
    }
  },

  actions: {
    loadNewConfig(int) {
      this.config = allPuzzles[int]
    }
  },
})
