const db = require('../models');

exports.getRandomQuestions = async (req, res) => {
    try {
        // Get total count of questions
        const count = await db.Question.count();
        
        // Generate array of random indices
        const randomIndices = [];
        const desiredCount = Math.min(10, count); // Don't try to fetch more than exist
        
        while (randomIndices.length < desiredCount) {
            const randomIndex = Math.floor(Math.random() * count);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }
        
        // Fetch questions using random offsets
        const questions = await db.Question.findAll({
            include: [{
                model: db.Option,
                as: 'options'
            }],
            where: {},
            limit: desiredCount,
            offset: randomIndices[0], // Start with first random index
            order: [[db.sequelize.col('id'), 'ASC']] // Consistent ordering
        });

        // If we need multiple queries to get all random questions
        const remainingQueries = randomIndices.slice(1).map(offset => 
            db.Question.findAll({
                include: [{
                    model: db.Option,
                    as: 'options'
                }],
                where: {},
                limit: 1,
                offset: offset,
                order: [[db.sequelize.col('id'), 'ASC']]
            })
        );

        // Combine all results
        const additionalQuestions = await Promise.all(remainingQueries);
        const allQuestions = [
            ...questions,
            ...additionalQuestions.flat()
        ];

        // Shuffle the final array to ensure random order
        const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);

        res.status(200).json(shuffledQuestions);
    } catch (error) {
        console.error('Error fetching random questions:', error);
        res.status(500).json({ 
            error: 'Failed to fetch questions',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};