// stores/counter.js
import { defineStore } from 'pinia'
import allPuzzles from "../data/puzzles.json"
import { solvePuzzle } from '../services/puzzleSolutionService'

export const usePuzzleConfigStore = defineStore('puzzleConfig', {
  state: () => {
    return {
      config: null,
    }
  },

  actions: {
    loadNewConfig(int) {
      this.config = allPuzzles[int]
      this.config.solution = solvePuzzle(this.config.rows, this.config.maxInputs)
    }
  },
})
