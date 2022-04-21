/**
 * @param {Array} tags
 * @returns {Array}
 */
export default function formaTags(tags) {
  if (!tags) {
    return [];
  } else {
    return tags.map((tag) => {
      return {
        id: tag.term_id,
        name: tag.name,
        slug: tag.slug,
        count: tag.count,
      };
    });
  }
}
