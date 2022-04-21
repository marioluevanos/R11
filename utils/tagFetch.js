import getMethodName from "@/utils/getMethodName";

/**
 * Bound "this" to all pages component with "_category" parameter.
 * Fetches category posts and updates the section title.
 */
export default async function tagFetch() {
  const route = this.route;
  const store = this.store;
  const storeName = getMethodName(route.name).store;
  const { dispatch, commit } = store;

  if (process.browser) {
    commit("SET_PAGE_LOADING", true);
  }

  const currentCategory = store.getters["category/currentCategory"];
  const currentId = !currentCategory ? false : currentCategory.id;

  // First load the categories, returns a promise
  await dispatch(`${storeName}/loadCategories`)
    //Get the current category this route is headed to
    .then((categories) => getCategory.apply(this, [route.params, storeName]))
    // Check if current ID is the same ID as before, If does not match id, reset pagination
    .then((category) => {
      if (currentId !== category.id)
        commit("category/RESET_PAGINATION", "articles");
      return category;
    })
    // Then load the category with the ID
    .then(async (category) => await loadCategory.call(this, category.id))
    // Update the section tile, it's already in memory, it's better timing here
    .then((_) => dispatch("updateSectionTitle", route))
    // Set the page loading to false
    .then((_) => commit("SET_PAGE_LOADING", false))
    .catch((error) => console.warn(error.message));
}

/**
 * Gets the current category from a list at the store, base on the route.
 * And sets the category name to the store.
 * @param {Object} params - The route params
 * @param {String} storeName - The store namespace
 * @returns {Object} - The current route category
 */
function getCategory(params, storeName) {
  const route = this.route;
  const router = this.router;
  const store = this.store;

  // If no category params, go back to home page
  if (!route.params.category) router.push({ name: route.name });

  // Return and do some equality checking to get the id
  const categories = store.getters[`${storeName}/categories`];
  const currentCategory = categories.find(
    (category) => category.slug === params.category
  );

  // Accessing the name for the header title
  store.commit("category/SET_CURRENT_CATEGORY", currentCategory);
  return currentCategory;
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
