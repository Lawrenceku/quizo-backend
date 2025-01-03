const db = require('../models');  // Import db object that contains all models


const quizData = [
    {
        category: 'HTML',
        question: 'What does HTML stand for?',
        options: [
            { answer: 'Hyper Text Markup Language', isCorrect: true },
            { answer: 'High Text Machine Language', isCorrect: false },
            { answer: 'Hyper Tool Markup Language', isCorrect: false },
            { answer: 'Hyperlinks and Text Markup Language', isCorrect: false },
        ],
    },
    {
        category: 'CSS',
        question: 'Which property is used to change the text color in CSS?',
        options: [
            { answer: 'color', isCorrect: true },
            { answer: 'font-color', isCorrect: false },
            { answer: 'text-color', isCorrect: false },
            { answer: 'background-color', isCorrect: false },
        ],
    },
    {
        category: 'JavaScript',
        question: 'Which method is used to add elements to the end of an array?',
        options: [
            { answer: 'push()', isCorrect: true },
            { answer: 'pop()', isCorrect: false },
            { answer: 'shift()', isCorrect: false },
            { answer: 'unshift()', isCorrect: false },
        ],
    },
    {
        category: 'HTML',
        question: 'Which tag is used to create a hyperlink?',
        options: [
            { answer: '<a>', isCorrect: true },
            { answer: '<link>', isCorrect: false },
            { answer: '<href>', isCorrect: false },
            { answer: '<nav>', isCorrect: false },
        ],
    },
    {
        category: 'CSS',
        question: 'Which CSS property controls the stacking order of elements?',
        options: [
            { answer: 'z-index', isCorrect: true },
            { answer: 'position', isCorrect: false },
            { answer: 'display', isCorrect: false },
            { answer: 'float', isCorrect: false },
        ],
    },
    {
        category: 'JavaScript',
        question: 'Which keyword is used to declare a constant in JavaScript?',
        options: [
            { answer: 'const', isCorrect: true },
            { answer: 'let', isCorrect: false },
            { answer: 'var', isCorrect: false },
            { answer: 'static', isCorrect: false },
        ],
    },
    {
        category: 'General',
        question: 'What is the full form of API?',
        options: [
            { answer: 'Application Programming Interface', isCorrect: true },
            { answer: 'Application Protocol Interface', isCorrect: false },
            { answer: 'Advanced Programming Interface', isCorrect: false },
            { answer: 'Application Program Input', isCorrect: false },
        ],
    },
    {
        category: 'HTML',
        question: 'Which attribute specifies the URL of an image in the <img> tag?',
        options: [
            { answer: 'src', isCorrect: true },
            { answer: 'href', isCorrect: false },
            { answer: 'link', isCorrect: false },
            { answer: 'path', isCorrect: false },
        ],
    },
    {
        category: 'CSS',
        question: 'Which unit is NOT relative in CSS?',
        options: [
            { answer: 'px', isCorrect: true },
            { answer: '%', isCorrect: false },
            { answer: 'em', isCorrect: false },
            { answer: 'rem', isCorrect: false },
        ],
    },
    {
        category: 'JavaScript',
        question: 'Which built-in method returns the character at a specified index in a string?',
        options: [
            { answer: 'charAt()', isCorrect: true },
            { answer: 'indexOf()', isCorrect: false },
            { answer: 'substring()', isCorrect: false },
            { answer: 'slice()', isCorrect: false },
        ],
    }
];

const seedQuestions = async () => {
    try {
        for (const questionData of quizData) {
            const question = await db.Question.create({ 
                category: questionData.category,
                question: questionData.question,
            });

            // Create associated options
            for (const optionData of questionData.options) {
                await db.Option.create({  
                    answer: optionData.answer,
                    isCorrect: optionData.isCorrect,
                    questionId: question.id,
                });
            }

            console.log(`Seeded question: ${question.question}`);
        }
        console.log('Seeding completed successfully');
    } catch (error) {
        console.error('Error seeding questions:', error);
        throw error;  
    }
};

module.exports = seedQuestions;