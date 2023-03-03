import { defineStore } from "pinia";
import { ref } from "vue"

export const useStore = defineStore("store", () => {
  const puzzleConfig = ref({
    completionText: "Lorem Ipsum",
    initText: "Lorem Ipsum",
    maxInputs: 10,
    rows: [
      ["UP", "DOWN", "LEFT", "RIGHT", "REPEAT"],
      ["DOWN", "DOWN", "UP", "UP", "RIGHT"]
    ],
    sorting: "3124",
    solution: "UPDOWNLEFTRIGHTUPUPDOWN"
  })

  const puzzleState = ref({
    numberOfInputs: 0,
    state: "",
  })

  return {
    puzzleConfig,
    puzzleState
  }
})