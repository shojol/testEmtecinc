export const findGenre = (ids, genresData) => {
  return genresData.filter((genre) => ids.find((id) => id === genre.id));
};
