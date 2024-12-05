const express = require('express');
const client = require('./db.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Start database connection
async function startDb() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
  } catch (err) {
    console.error('Failed to connect to database', err.stack);
    process.exit(1); // Exit the application if the DB connection fails
  }
}

// Gracefully close database connection
async function stopDb() {
  try {
    await client.end();
    console.log('Disconnected from PostgreSQL database');
  } catch (err) {
    console.error('Error closing database connection', err.stack);
  }
}

// Routes
app.get('/api', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
async function startServer() {
  await startDb(); // Ensure DB is connected before starting server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Graceful shutdown handling
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  await stopDb();
  process.exit(0);
});

// Bootstrap the application
startServer();
