/**
 * This removed any unwanted characters in search
 * @param {String} words - The entered search word
 * @returns {String} - Cleaned search-string with "+" concatination
 */
export default function cleanSearchWords(words = "") {
  return words
    .replace(/[,._&%$#@!~`={}*();^"'\\|\/?><\[\]]/gim, "")
    .replace(/[ ]/g, " ")
    .replace(/-/gm, " ");
}
