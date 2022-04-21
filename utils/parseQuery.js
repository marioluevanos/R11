/**
 * @param {String} query
 * @returns {String} Concatinated query string for a url. Example return value: "key1=value1&key2=value2"
 */
export default function parseQuery(query) {
  return !query
    ? ""
    : Object.entries(query)
        .map(([val, entry]) => `${val}=${entry}`)
        .join("&");
}
