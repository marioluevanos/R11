import getMethodName from "@/utils/getMethodName";

/**
 * Utitlity for all slug pages. Fetches data based on the route name
 */
export default async function slugFetch() {
  const { store, params, route } = this;
  const storeInfo = getMethodName(route.name);
  const storeName = storeInfo.store;

  store.commit("SET_PAGE_LOADING", true);

  // Get the main article for the page
  const content = await store.dispatch(`${storeName}/loadSlug`, params);
  const recentContent = await getRecentContent.call(store, storeName);
  const asideContent = await getAsideContent.apply(store, [storeInfo, params]);

  // Resolve all data, then set loading to false
  Promise.all([content, recentContent, asideContent])
    .then((_) => store.commit("SET_PAGE_LOADING", false))
    .catch((error) => console.warn(error.message));
}

/**
 * Gets the latest content. Checks to see if the data exists first.
 *
 * @function getRecentContent
 * @param {String} storeName - Name of the store
 * @returns {Promise<Array>} - The latest content
 */
async function getRecentContent(storeName) {
  const isRecentContentEmpty =
    this.getters[`${storeName}/${storeName}`].length === 0;

  // Only call this action if store for all {content} is empty
  if (isRecentContentEmpty) {
    return await this.dispatch(`${storeName}/loadLatest`);
  }
}

/**
 * Gets the related category content for the aside elements.
 *
 * @function getAsideContent
 * @param {Object} storeInfo - Holds the store name and method name to call
 * @param {Object} params - Route params
 */
async function getAsideContent(storeInfo, params) {
  const { store, method } = storeInfo;
  const categories = this.getters[`${store}/categories`];
  const { id } = categories.find(
    (category) => category.slug === params.category
  );
  return await this.dispatch(`category/${method}`, { id });
}
