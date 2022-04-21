import getMethodName from "@/utils/getMethodName";

/**
 * Dispatches the event to load the store with the page data.
 * dipatch() methods returns the same data that is being loded to the store.
 */
export default async function postTypeFetch() {
  const { route, store } = this; // This function is bound to the page component
  const { commit, dispatch } = store;
  const storeName = getMethodName(route.name).store;
  const isStoreEmpty = store.getters[`${storeName}/${storeName}`].length === 0;

  if (process.browser) {
    commit("SET_PAGE_LOADING", true);
  }

  //Only call this action if store for all articles is empty
  if (isStoreEmpty) {
    try {
      await dispatch(`${storeName}/loadLatest`);
    } catch (error) {
      console.warn(error);
    }
  }
  commit("SET_PAGE_LOADING", false);
}
