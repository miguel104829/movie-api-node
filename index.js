const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const Movie = require('./models/movie-model');
const movieRoutes = require('./routes/movie-routes');

const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/movie', movieRoutes);
const port = 3000;

// Connect to MongoDB
mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

