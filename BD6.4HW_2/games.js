let games = [
  { id: 1, title: 'The Legend of Zelda', genreId: 1 },
  { id: 2, title: 'Super Mario Bros', genreId: 2 },
];

let genres = [
  { id: 1, name: 'Action-Adventure' },
  { id: 2, name: 'Platformer' },
];
const getAllGames = async () => {
  return games;
};

const getGamesById = async (id) => {
  return games.find((game) => game.id === id);
};

const getAllGenres = async () => {
  return genres;
};

const getGenresById = async (id) => {
  return genres.find((genre) => genre.id === id);
};

module.exports = {
  getAllGames,
  getGamesById,
  getAllGenres,
  getGenresById,
};
