/**
 * @param {Object} author
 * @returns {Object}
 */
export default function formatAuthor(author) {
  if (!author) {
    return {
      name: process.env.r11.title,
      id: 0,
      count: 0,
      slug: "residence-11",
      description: "",
    };
  }
  return {
    name: author.name,
    id: author.term_id,
    count: author.count,
    slug: author.slug,
    description: author.description,
  };
}
