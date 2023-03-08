// stores/counter.js
import { defineStore } from 'pinia'
import allPuzzles from "../data/puzzles.json"
import { solvePuzzle } from '../services/puzzleSolutionService'
import { useAppStateStore } from './appState'
import { createPuzzle } from '../services/puzzleCreationService'

export const usePuzzleConfigStore = defineStore('puzzleConfig', {
  state: () => {
    return {
      config: null,
    }
  },

  actions: {
    loadNewConfig(int) {
      const appState = useAppStateStore()

      if (appState.isEndlessModeEnabled) {
        this.config = createPuzzle();
      } else {
        this.config = allPuzzles[int]
      }

      this.config.solution = solvePuzzle(this.config.rows, this.config.maxInputs)
    }
  },
})
