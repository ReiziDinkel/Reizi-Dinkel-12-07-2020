const cors = require('cors');
const express = require('express');
const { connect } = require('./connect');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const authMiddleware = require('./middlewares/authMiddleware');



connect();

app = express();
port = process.env.PORT || 4000;
app.listen(port);
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.use('/task', authMiddleware.authenticateJWT, taskRoutes);
app.use('/user', userRoutes);

console.log('todo list RESTful API server started on: ' + port);
