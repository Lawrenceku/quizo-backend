const express = require('express');
const quizController = require('../controllers/quiz.controller');
const router = express.Router();

router.get('/questions', quizController.getRandomQuestions);

module.exports = router;
