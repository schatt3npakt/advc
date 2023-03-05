export const solvePuzzle = (puzzle, charLimit) => {
  let rowIterator = 0
  const rowItemsIterators = []
  let solutionString = ""

  for (let i = 0; i < puzzle.length; i++) {
    rowItemsIterators.push(0)
  }

  for (let i = 0; i < charLimit; i++) {
    const currentCommand = puzzle[rowIterator][rowItemsIterators[rowIterator]]

    // On repeat keyword, reset iterator for the current row
    if (currentCommand === "REPEAT") {
        i--
        rowItemsIterators[rowIterator] = 0
        continue
    }

    console.log(currentCommand)

    // the riddles are read top to bottom, left to right
    // The solution is constructed by accessing the value of row 0 at position 0,
    // then row 1 at position 0,
    // then row 0 at position 1 and so on.
    solutionString += currentCommand

    // increase current row item iterator if items in row are nor exceeded, else reset
    if (rowItemsIterators[rowIterator] < puzzle[rowIterator].length -1) {
      rowItemsIterators[rowIterator]++
    } else {
      rowItemsIterators[rowIterator] = 0
    }

    // if number of rows in puzzle is not exceeded, increase row iterator, else set to zero
    if (rowIterator < puzzle.length - 1) {
      rowIterator++
    } else {
      rowIterator = 0
    }
  }

  return solutionString
}