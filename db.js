// db.js
const { Client } = require('pg');

const client = new Client({
  user: process.env.POSTGRES_USER,
  host: 'localhost',
  database: 'mydb',
  password: process.env.POSTGRES_PASSWORD, // use .env value for database password
  port: 5432, // default PostgreSQL port
});

// Export the client for use in other files
module.exports = client;
