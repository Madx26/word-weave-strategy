// Find all horizontal and vertical words in the grid
export const findWords = (grid: string[][]): string[] => {
  const words: string[] = [];
  const gridSize = grid.length;

  // Find horizontal words (left to right)
  for (let row = 0; row < gridSize; row++) {
    let currentWord = "";
    for (let col = 0; col < gridSize; col++) {
      const cell = grid[row][col];
      if (cell) {
        currentWord += cell;
      } else {
        if (currentWord.length >= 2) {
          words.push(currentWord);
        }
        currentWord = "";
      }
    }
    // Check word at end of row
    if (currentWord.length >= 2) {
      words.push(currentWord);
    }
  }

  // Find vertical words (top to bottom)
  for (let col = 0; col < gridSize; col++) {
    let currentWord = "";
    for (let row = 0; row < gridSize; row++) {
      const cell = grid[row][col];
      if (cell) {
        currentWord += cell;
      } else {
        if (currentWord.length >= 2) {
          words.push(currentWord);
        }
        currentWord = "";
      }
    }
    // Check word at end of column
    if (currentWord.length >= 2) {
      words.push(currentWord);
    }
  }

  return words;
};
