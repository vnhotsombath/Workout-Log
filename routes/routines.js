const express = require('express');
const router = express.Router();
const routineController = require('../controllers/routines');

router.get('/routines/new', routineController.new);
router.post('/routines', routineController.create);

module.exports = router;