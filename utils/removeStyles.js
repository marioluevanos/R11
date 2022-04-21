/**
 * Removes any authored style attributes from all html tags
 * @param {String} content
 * @returns {String}
 */
export function removeStyles(content) {
  const matchStyleTags = /style=["|'][a-zA-Z0-9:;\.\s\(\)\-\,%]*["|']/gm;
  const matchLessB = /&lt;/g;
  const matchGreaB = /&gt;/g;

  if (!content) return "";

  const cleanedContent = content
    .replace(matchStyleTags, "")
    .replace(matchLessB, "<")
    .replace(matchGreaB, ">");

  return cleanedContent;
}
