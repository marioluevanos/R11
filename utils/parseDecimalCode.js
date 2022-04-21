/**
 * Parses some HTML enteties
 * @param {String} - The HTML unescaped title
 * @returns {String} - HTML Symbol version
 */
export default function parseDecimalCode(string = "") {
  return string
    .replace(/&#038;/g, "&") // ampersand
    .replace(/&#8216;/g, "‘") // left single quotation mark
    .replace(/&#8217;/g, "’") // right single quotation mark
    .replace(/&#8220;/g, "“") // left double quotation mark
    .replace(/&#8221;/g, "”") // right double quotation mark
    .replace(/&#8211;/g, "–") // en dash
    .replace(/&#8212;/g, "—") // em dash
    .replace(/&#8230;/g, "…"); // horizontal ellipsis
}
