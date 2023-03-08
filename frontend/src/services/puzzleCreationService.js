import commands from "../data/commands.json"

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const createPuzzle = () => {
  const randomNumberOfRows = getRandomInteger(1, 4);
  const rows = []

  // Add row array
  for (let i = 0; i < randomNumberOfRows; i++) {
    rows.push([])

    // Add commands to current row array
    for (let j = 0; j < getRandomInteger(2, 6); j++) {
      // Add new random command to row array
      const commandsAccessKey = getRandomInteger(0, (commands.length - 1))
      rows[i].push(commands[commandsAccessKey])
    }
  }

  const puzzle = {
    "maxInputs": getRandomInteger(3, 12),
    "rows": rows
  }
  
  return puzzle
 };