const express = require('express');
const router = express.Router();
const routinesController = require('../controllers/routines');
const isLoggedIn = require('../config/auth');


router.get('/', isLoggedIn, routinesController.index);
router.get('/new', isLoggedIn, routinesController.new);
router.get('/:id', routinesController.show);
router.get('/:id/edit', isLoggedIn, routinesController.edit);
router.post('/', isLoggedIn, routinesController.create);
router.delete('/:id', routinesController.delete);
//router.put('/:id/update', isLoggedIn, routinesController.update);



module.exports = router;