/**
 * Takes a route name and returns the store and method name it needs to use.
 * @param {String} name - The route name
 * @returns {Object} - The store name and method name the route needs to call
 */
export default function getMethodName(name) {
  let store, method;

  switch (name) {
    // post types
    case "short-stories":
      store = "stories";
      break;
    case "articles":
      store = "articles";
      break;
    case "on-top":
      store = "onTop";
      break;
    case "news":
      store = "news";
      break;

    // categories and slug
    case "short-stories-category":
    case "short-stories-category-slug":
      store = "stories";
      method = "loadStoriesByCategory";
      break;
    case "articles-category":
    case "articles-category-slug":
      store = "articles";
      method = "loadArticlesByCategory";
      break;
    case "on-top-category":
    case "on-top-category-slug":
      store = "onTop";
      method = "loadOnTopByCategory";
      break;
    case "news-category":
    case "news-category-slug":
      store = "news";
      method = "loadNewsByCategory";
      break;
    case "contributors-slug":
      store = "contributors";
      method = "loadContentByContributor";
      break;
    default:
      throw new Error(
        "getMethodName doesn't recognize the store name or the method name."
      );
  }

  return { store, method };
}
