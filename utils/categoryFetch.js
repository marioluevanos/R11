import getMethodName from "@/utils/getMethodName";

/**
 * Bound "this" to all pages component with "_category" parameter.
 * Fetches category posts and updates the section title.
 */
export default async function categoryFetch() {
  const { dispatch, commit } = this.store;
  const storeName = getMethodName(this.route.name).store;
  const identifier = this.route.params.category || this.route.params.slug;
  const prevCategory = this.store.getters["category/currentCategory"];

  if (process.browser) {
    commit("SET_PAGE_LOADING", true);
  }

  const loadedCategories = await getCategories.call(this, storeName);
  const singleCategory = loadedCategories.find(
    (cat) => cat.slug === identifier
  );

  if (loadedCategories.length === 0 || !singleCategory) return null;

  commit("category/SET_CURRENT_CATEGORY", singleCategory);

  if (prevCategory.slug !== singleCategory.slug) {
    resetPagination.call(this);
  }

  // Then load the category with the ID
  await loadCategory.call(this, singleCategory.id);

  // Update the section tile, it's already in memory, it's better timing here
  dispatch("updateSectionTitle", this.route);

  // Set the page loading to false
  commit("SET_PAGE_LOADING", false);
}

function resetPagination() {
  const postTypes = ["articles", "stories", "onTop", "news", "contributors"];
  const reset = (t) => this.store.commit("category/RESET_PAGINATION", t);
  postTypes.forEach(reset);
}

/**
 * Dispatches the method needed to correct method name at the store to make the HTTP request.
 * @param {Number} id - The category id.
 * @returns {Promise<Array>}
 */
async function loadCategory(id) {
  return await this.store.dispatch(
    `category/${getMethodName(this.route.name).method}`,
    { id }
  );
}

/**
 *
 * @param {String} name
 */
async function getCategories(storeName) {
  const categories = this.store.getters[`${storeName}/categories`];

  if (categories && categories.length) {
    return categories;
  }

  return await this.store.dispatch(`${storeName}/loadCategories`);
}
