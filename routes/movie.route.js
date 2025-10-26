const MovieController = require('../controllers/movie.controller');

const route = (app) => {
  app.post('/mba/api/v1/movies', MovieController.createMovie);
};

module.exports = route;
