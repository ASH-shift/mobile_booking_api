const MovieController = require('../controllers/movie.controller');

const route = (app) => {
  // Create a movie
  app.post('/mba/api/v1/movies', MovieController.createMovie);

  // Delete a movie by ID
  app.delete('/mba/api/v1/movies/:movieId', MovieController.deleteMovie);
};

module.exports = route;
