const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const NUMBERS = [8, 7, 6, 5, 4, 3, 2, 1];

export function convertCoordinates(rowIndex: number, colIndex: number) {
  const letter = LETTERS[colIndex];
  const number = NUMBERS[rowIndex];

  return `${letter}${number}`;
}

export function convertNotationToCoordinates(notation: string): { row: number; col: number } | null {
  if (!notation || notation.length !== 2) {
    return null;
  }

  const letter = notation[0].toLowerCase();
  const number = parseInt(notation[1]);

  const colIndex = LETTERS.indexOf(letter);
  const rowIndex = NUMBERS.indexOf(number);

  if (colIndex === -1 || rowIndex === -1) {
    return null;
  }

  return { row: rowIndex, col: colIndex };
}
