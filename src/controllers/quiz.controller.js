const db = require('../models'); // Import the db object

const getRandomQuestions = async (desiredCount) => {
    try {
        // Fetch 10 random questions directly from the database
        const randomQuestions = await db.Question.findAll({
            order: sequelize.literal('RANDOM()'), // Randomize order
            limit: desiredCount, // Limit to 10 questions
            include: [
                {
                    model: db.Option,
                    as: 'options', // Include associated options
                },
            ],
        });

        return randomQuestions;
    } catch (error) {
        console.error('Error fetching random questions:', error);
        throw error;
    }
};

// Example usage in a route/controller
exports.getRandomQuestions = async (req, res) => {
    try {
        const questions = await getRandomQuestions(10); // Fetch 10 random questions
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
};
