/**
 * Transform an ISO datetime into a short format date.
 * @example
 * 2022-12-30T08:00:00.000Z -> 12/30/2022 08:00
 */
export function formatDate(dateTime: string): string {
  const splitted = dateTime.split("T");
  const [year, month, day] = splitted[0].split("-");
  const date = `${month}/${day}/${year}`;

  return date;
}

/**
 * Transform an ISO datetime into a more human-readable format.
 * @example
 * 2022-12-30T08:00:00.000Z -> Dec 30, 2022, 08:00 AM
 */
export function formatDateTime(dateTime: string): string {
  const formatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return formatter.format(new Date(dateTime));
}

/**
 * Transform a number into a formatted currency with two fraction digits.
 * @example
 * 1500.0 -> $ 1500.00
 */
export function formatCurrency(value: number): string {
  return `$ ${value.toFixed(2)}`;
}
