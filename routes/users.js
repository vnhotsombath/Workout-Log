const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const isLoggedIn = require('../config/auth');

// get users listing 
router.get('/new', userController.new);
router.get('/', userController.index);
router.post('/', userController.create);

module.exports= router;