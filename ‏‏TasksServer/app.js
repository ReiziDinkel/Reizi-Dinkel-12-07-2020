const cors = require('cors');
const express = require('express');
const { connect } = require('./connect');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();
const authMiddleware = require('./middlewares/authMiddleware');



connect();

app = express();
port = process.env.PORT || 4000;
app.listen(port);
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// app.use('/task', routes);
app.use('/task', authMiddleware.authenticateJWT, taskRoutes);
app.use('/user', userRoutes);

console.log('todo list RESTful API server started on: ' + port);
