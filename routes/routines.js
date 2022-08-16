const express = require('express');
const router = express.Router();
const routineController = require('../controllers/routines');



router.get('/new', routineController.new);
router.post('/routines', routineController.create);
//router.get('/:id', routineController.show);


module.exports = router;