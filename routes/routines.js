const express = require('express');
const router = express.Router();
const routinesController = require('../controllers/routines');


router.get('/', routinesController.index);
router.get('/new', routinesController.new);
router.get('/routines/:id', routinesController.show);
router.post('/', routinesController.create);



module.exports = router;