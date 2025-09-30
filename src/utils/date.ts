export function formatDisplayDate(iso: string, locale = "en-PH") {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}
