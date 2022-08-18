const express = require('express');
const router = express.Router();
const routinesController = require('../controllers/routines');
const isLoggedIn = require('../config/auth');


router.get('/', routinesController.index);
router.get('/new', isLoggedIn, routinesController.new);
router.get('/:id', routinesController.show);
router.get('/routines/:id/edit', routinesController.edit);
router.post('/', isLoggedIn, routinesController.create);




module.exports = router;