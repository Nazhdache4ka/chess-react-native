export function getCellColor(rowIndex: number, colIndex: number) {
  return (rowIndex + colIndex) % 2 === 0 ? '#f0d9b5' : '#b58863';
}
