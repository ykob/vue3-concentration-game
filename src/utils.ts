export const zeroPadding = (num: number, length: number) => {
  return (Array(length).join("0") + num).slice(-length);
};
export const getTime = (t: number) => {
  const time = Math.min(t, 100 * 60 * 1000);
  const timeMinutes = zeroPadding(Math.floor(time / 1000 / 60), 2);
  const timeSeconds = zeroPadding(Math.floor(time / 1000) % 60, 2);
  const timeMilliseconds = zeroPadding(Math.floor(time % 1000), 3);

  return `${timeMinutes}:${timeSeconds}.${timeMilliseconds}`;
}