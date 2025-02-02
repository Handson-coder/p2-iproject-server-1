const getPagination = (page, size) => {
  const limit = size ? +size : 8;
  const offset = page ? (page-1) * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: hospitalWithPagination } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, hospitalWithPagination, totalPages, currentPage };
};

module.exports = { getPagination, getPagingData }