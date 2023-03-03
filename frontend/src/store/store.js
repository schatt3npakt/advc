import { defineStore } from "pinia";
import { ref } from "vue"

export const useStore = defineStore("store", () => {
  const state = ref({
    initText: "Lorem Ipsum",
    completionText: "Lorem Ipsum",
    sorting: "3124",
    maxInputs: 10,
    rows: [
      ["UP", "DOWN", "LEFT", "RIGHT", "REPEAT"],
      ["DOWN", "DOWN", "UP", "UP", "RIGHT"]
    ]
  })

  return {
    state
  }
})