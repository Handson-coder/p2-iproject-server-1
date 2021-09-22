const getPagination = (page, size) => {
  const limit = size ? +size : 15;
  const offset = page ? (page-1) * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: movies } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, movies, totalPages, currentPage };
};

module.exports = { getPagination, getPagingData }