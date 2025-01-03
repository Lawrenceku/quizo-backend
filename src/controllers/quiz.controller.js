const db = require('../models');  // Import the db object

exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await db.Question.findAll({
            include: [{
                model: db.Option,
                as: 'options'
            }]
        });
        res.status(200).json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
};