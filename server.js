// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Enable CORS
// app.use(cors());

// // Parse incoming requests with JSON payloads
// app.use(bodyParser.json());

// // Connect to MongoDB (replace 'your-mongodb-url' with your actual MongoDB connection string)
// mongoose.connect('your-mongodb-url', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Routes will be added here

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Connect to MongoDB (replace 'your-mongodb-url' with your actual MongoDB connection string)
// mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://127.0.0.1:27017/mahima', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const usersRouter = require('./routes/users');
const foodsRouter = require('./routes/foods');
const ordersRouter = require('./routes/orders');

// Use routes
app.use('/users', usersRouter);
app.use('/foods', foodsRouter);
app.use('/orders', ordersRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
