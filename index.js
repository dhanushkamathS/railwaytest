// index.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route handler for the default home page

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.get('/test', (req, res) => {
    res.send("what's up bitches!!!");
  });
  
  // Start the Express server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });