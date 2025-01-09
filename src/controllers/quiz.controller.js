const db = require('../models'); // Import the db object

exports.getRandomQuestions = async (req, res) => {
    try {
        // Fetch 10 random questions from the database
        const questions = await db.Question.findAll({
            include: [{
                model: db.Option,
                as: 'options'
            }],
            order: db.sequelize.literal('RAND()'), // Use RAND() for random order
            limit: 10, // Limit the number of results to 10
        });

        res.status(200).json(questions);
    } catch (error) {
        console.error('Error fetching random questions:', error);
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
};
