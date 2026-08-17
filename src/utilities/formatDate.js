export function formatDate(dateString, showYear = false) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", {
    month: "long",
  });
  const year = date.toLocaleString("default", {
    year: "numeric",
  });

  function getDaySuffix(day) {
    if (day === 1 || day === 21 || day === 31) return "st";
    if (day === 2 || day === 22) return "nd";
    if (day === 3 || day === 23) return "rd";
    return "th";
  }

  if (showYear) {
    return `${day}${getDaySuffix(day)} ${month} ${year}`;
  }

  return `${day}${getDaySuffix(day)} ${month}`;
}
