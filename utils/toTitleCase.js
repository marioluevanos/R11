/**
 * @param {String} text
 * @returns Title case "my-random-word" -> "My Random Word"
 */
export default function toTitleCase(text = "") {
  return (
    text

      // explicitly remove the words "category" and "slug"
      .replace(/category|slug/gi, "")

      // match \W "Not Word" and replace with whitespace
      .replace(/\W/g, " ")

      // make array of words
      .split(" ")

      // remove whitespace
      .filter((w) => w)

      // transform each first letter of word
      .map((word) => word.replace(/\w{1}/, (match) => match.toUpperCase()))

      // join array words with space into string
      .join(" ")
  );
}
