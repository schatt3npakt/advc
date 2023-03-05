const keyMappings = {
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
  ArrowUp: "UP",
  ArrowDown: "DOWN"
}

export function initKeyboardControls (puzzleState) {
  window.addEventListener("keyup", (event) => {
    if (event.code === "Backspace") {
      puzzleState.removeFromPuzzleState()
    }

    if (keyMappings[event.code] !== undefined) {
      puzzleState.appendToPuzzleState(keyMappings[event.code])
    }
  })
}