 const express = require('express')
 const router = require('express').Router();
 const exerciseController = require('../controllers/exercises');

router.get('/exercises/new', exerciseController.new);