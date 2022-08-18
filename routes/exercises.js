 const express = require('express');
 const router = express.Router();
 const exercisesController = require('../controllers/exercises');

router.get('/exercises/new', exercisesController.new);
router.post('/exercises', exercisesController.create);

module.exports= router;