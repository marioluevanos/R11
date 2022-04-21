/**
 * @param {String} inputDate
 * @returns {String} - Formatted date
 */
export default function formatDate(inputDate) {
  if (!inputDate) {
    return "";
  } else {
    const date = inputDate.replace(/T/, " ").split(" ")[0].split("-");
    const months = Array.from({ length: 12 }, (x, index) =>
      new Date(0, index).toLocaleDateString("en-us", { month: "short" })
    );
    const day = date[2];
    const month = months[date[1].replace(/0/, "") - 1];
    const year = date[0];
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  }
}
