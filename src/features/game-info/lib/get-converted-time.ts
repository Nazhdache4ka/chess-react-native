export function getConvertedTime(whiteTime: number, blackTime: number) {
  const minutesWhite = Math.floor((whiteTime % 3600) / 60);
  const secondsWhite = whiteTime % 60;
  const minutesBlack = Math.floor((blackTime % 3600) / 60);
  const secondsBlack = blackTime % 60;
  return {
    whiteTime: `${minutesWhite}:${secondsWhite.toString().padStart(2, '0')}`,
    blackTime: `${minutesBlack}:${secondsBlack.toString().padStart(2, '0')}`,
  };
}
