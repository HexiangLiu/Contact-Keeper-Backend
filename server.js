require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://Hexiang:${process.env.DB_PASSWORD}@cluster0.wpcq8.mongodb.net/contact_keeper?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connect to MongoDB successfully'))
  .catch((err) => console.error(err));

// express server
const app = express();
const PORT = process.env.PORT || 8000;

// Init Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
