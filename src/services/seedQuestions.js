const db = require('../models'); // Import db object containing models
const quizData = require('./quizData.js'); // Import quiz data from JSON file

// Function to shuffle an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const seedQuestions = async () => {
    try {
      const selectedQuestions = shuffleArray(quizData).slice(0, 10);
  
      for (const questionData of selectedQuestions) {
        const [question, created] = await db.Question.findOrCreate({
          where: { question: questionData.question },
          defaults: { category: questionData.category },
        });
  
        if (created) {
          for (const optionData of questionData.options) {
            await db.Option.create({
              answer: optionData.answer,
              isCorrect: optionData.isCorrect,
              questionId: question.id,
            });
          }
          console.log(`Seeded question: ${question.question}`);
        } else {
          console.log(`Duplicate question skipped: ${question.question}`);
        }
      }
  
      console.log('Seeding completed successfully');
    } catch (error) {
      console.error('Error seeding questions:', error);
      throw error;
    }
  };
  

module.exports = seedQuestions;
