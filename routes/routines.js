const express = require('express');
const router = express.Router();
const routinesController = require('../controllers/routines');


router.get('/', routinesController.index);
router.get('/new', routinesController.new);
router.post('/routines', routinesController.create);
router.get('/:id', routinesController.show);


module.exports = router;