/** Parses a string in any date format and returns a new string in the format {dd month yyyy} */
const formatDate = (dateString: string | Date) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) return dateString;

  const formattedDate = new Intl.DateTimeFormat(
    navigator?.language || "en-US",
    { dateStyle: "long" }
  ).formatToParts(date);

  const day = formattedDate.find((x) => x.type === "day");
  const month = formattedDate.find((x) => x.type === "month");
  const year = formattedDate.find((x) => x.type === "year");

  return `${day?.value} ${month?.value} ${year?.value}`;
};

export default formatDate;
