const express = require('express');
const cors = require('cors');
const seedQuestions = require('./src/services/seedQuestions');
require('dotenv').config(); // Load environment variables

const app = express();
const db = require('./src/models/index');

// CORS Options
var corsOptions = {
  origin: '*', // Allow all origins; adjust for production security
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the application.' });
});

db.sequelize.sync({ alter: true }) // Adjust tables to match models without destroying data
  .then(() => {
    console.log('Database synced.');
    seedQuestions(); // Call the seeding function only if required
  })
  .catch((error) => console.error('Error syncing database:', error));


// Import and Use Routes
require('./src/routes/auth')(app);
require('./src/routes/user')(app);
const quizRoutes = require('./src/routes/quiz');
app.use('/api/quiz', quizRoutes);


// Start Server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});