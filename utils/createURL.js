/**
 * @param {Object} data - Format a proper url with the post-type and slug
 * @returns {String} - The catgory and slug route path
 */
export default function createURL(data) {
  // Normalize the underscore with dashes
  const type = data.type.replace(/_/g, "-");

  // Pluraize the post type for articles and pages
  const postType =
    type === "page" ? "" : type === "article" ? "articles" : type;

  // if a page, make a url with just the slug
  if (type === "page" && !data.acf.category) {
    return `/${data.slug}`;
  }
  // if a not a page, make a url with post type, followed by category, then slug
  else {
    // Get the category of said post type
    const category = data.acf.category.slug;

    return `${postType}/${category}/${data.slug}/`;
  }
}
