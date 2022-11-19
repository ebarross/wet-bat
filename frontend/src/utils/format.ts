/**
 * Transform an ISO datetime into a short format datetime.
 * @example
 * 2022-12-30T12:00:00.000Z -> 12/30/2022 12:00
 */
export function formatDateTime(dateTime: string): string {
  const splitted = dateTime.split("T");
  const time = splitted[1].slice(0, 5);
  const [year, month, day] = splitted[0].split("-");
  const date = `${month}/${day}/${year}`;
  return `${date} ${time}`;
}

/**
 * Transform a number into a formatted currency with two fraction digits.
 * @example
 * 1500.0 -> $ 1500.00
 */
export function formatCurrency(value: number): string {
  return `$ ${value.toFixed(2)}`;
}
