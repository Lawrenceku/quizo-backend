const db = require('../models');

exports.getRandomQuestions = async (req, res) => {
    try {
        const totalCount = await db.Question.count();
        const limit = Math.min(10, totalCount);
        
        // Get all questions in random order
        const questions = await db.Question.findAll({
            include: [{
                model: db.Option,
                as: 'options'
            }],
            order: db.sequelize.random(),  // This is the Sequelize way to ORDER BY RAND()
            limit: limit
        });

        res.status(200).json(questions);
    } catch (error) {
        console.error('Error fetching random questions:', error);
        res.status(500).json({ 
            error: 'Failed to fetch questions',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};