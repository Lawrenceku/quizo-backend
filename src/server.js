const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const database = require('./models/index');

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

// Sync Database
database.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Db');
});

// Import and Use Routes
require('./routes/auth')(app);
require('./routes/user')(app);

// Start Server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});