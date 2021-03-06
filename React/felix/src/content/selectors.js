export const allFavorites = (state) => state.content.favorites;
export const isFavoriteById = (state, id) => state.content.favorites.includes(id);
export const isFetchingMovies = (state) => state.content.movies.loading;
export const getMoviesData = (state) => state.content.movies.data;
export const getMoviesError = (state) => state.content.movies.error;