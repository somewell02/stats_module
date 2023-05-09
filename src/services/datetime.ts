export const msToDayMonthYear = (ms: number): string => {
  const date = new Date(ms);
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  } as const;

  const result = date.toLocaleDateString("ru", options);
  return result.toString();
}; // 16.10.2021
