const express = require('express');
const app = express();

let {
  getAllGames,
  getGamesById,
  getAllGenres,
  getGenresById,
} = require('./games');

app.get('/api/games', async (req, res) => {
  try {
    const games = await getAllGames();
    if (games.length === 0) {
      return res.status(404).json({ error: 'No games found' });
    }
    return res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/games/:id', async (req, res) => {
  try {
    const games = await getGamesById(parseInt(req.params.id));
    if (!games) {
      return res.status(404).json({ error: 'No games found' });
    }
    return res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/genres', async (req, res) => {
  try {
    const genres = await getAllGenres();
    if (genres.length === 0) {
      return res.status(404).json({ error: 'No genres found' });
    }
    return res.json(genres);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/genres/:id', async (req, res) => {
  try {
    const genres = await getGamesById(parseInt(req.params.id));
    if (!genres) {
      return res.status(404).json({ error: 'No genres found' });
    }
    return res.json(genres);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = { app };
