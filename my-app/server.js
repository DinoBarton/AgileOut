// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let problems = [];

app.get('/api/problems', (req, res) => {
    res.json(problems);
});

app.post('/api/problems', (req, res) => {
    const problem = req.body;
    problems.push(problem);
    res.json(problem);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});