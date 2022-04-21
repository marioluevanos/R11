/**
 * @param {Object} category
 * @returns {Object}
 */
export default function formatCategory(category) {
  if (!category) {
    return {};
  } else
    return {
      name: category.name,
      slug: category.slug,
      id: category.term_id,
      description: category.description,
    };
}
