/**
 * @param {String} content - The authored content from wordpress
 * @returns {String} The estimated amount of time spent reading the content
 */
export default function calcMinuteRead(content) {
  const matchHTML =
    /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[\^'">\s]+))?)+\s*|\s*)\/?>/g; // pattern to match all HTML tags
  const textContent = content.replace(matchHTML, ""); // Remove HTML
  const wordCount = textContent.split(" ").length;
  const averageWordsRead = 200;
  const minutes = Math.ceil(wordCount / averageWordsRead);
  return `${minutes} min read`;
}
