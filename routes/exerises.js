const express = require('express')
const router = require('express').Router();
const exerciseController = require('../controllers/exercises');

router.get('/:id', exerciseController.show);