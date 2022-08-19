 const express = require('express');
 const router = express.Router();
 const exercisesController = require('../controllers/exercises');

//router.get('/exercises/new', exercisesController.new);
router.post('/routines/:id/exercises', exercisesController.create);
router.delete('/exercises/:id', exercisesController.delete);

module.exports= router;