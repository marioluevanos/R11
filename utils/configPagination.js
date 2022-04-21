/**
 * @param {Object} state - The state object from the store
 * @param {Object} headers - wordpress response headers
 */
export default function configPagination(state, headers) {
  const { pagination, pageData } = state;

  if (!pagination || !pageData || !headers) return;

  pagination.total = +headers["x-wp-total"];
  pagination.totalPages = +headers["x-wp-totalpages"];
  pagination.from = pagination.total
    ? (pageData.page - 1) * pageData.per_page + 1
    : 0;

  pagination.to =
    pageData.page * pageData.per_page > pagination.total
      ? pagination.total
      : pageData.page * pageData.per_page;

  pagination.prevPage = pageData.page > 1 ? pageData.page : 0;

  pagination.nextPage =
    pageData.page < pagination.totalPages ? pageData.page + 1 : 0;
}

export function configCategoryPagination(state, { headers, postType }) {
  const { pagination, pageData } = state;

  if (!pagination || !pageData || !headers) return;

  pagination[postType].total = +headers["x-wp-total"];
  pagination[postType].totalPages = +headers["x-wp-totalpages"];

  pagination[postType].from = pagination[postType].total
    ? (pageData[postType].page - 1) * pageData[postType].per_page + 1
    : 0;

  pagination[postType].to =
    pageData[postType].page * pageData[postType].per_page >
    pagination[postType].total
      ? pagination[postType].total
      : pageData[postType].page * pageData[postType].per_page;

  pagination[postType].prevPage =
    pageData[postType].page > 1 ? pageData[postType].page : 0;

  pagination[postType].nextPage =
    pageData[postType].page < pagination[postType].totalPages
      ? pageData[postType].page + 1
      : 0;
}
