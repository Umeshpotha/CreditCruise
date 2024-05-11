const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
app.use(bodyParser.json());
app.use(cors())

const port = 4000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/login-loans', { })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String
});

const User = mongoose.model('User', UserSchema, 'users');

app.post('/register', async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;

  if(password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  const user = new User({ fullname, email, password });
  try {
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user || !password) {
    return res.status(400).json({ error: "Invalid credentials" });
  }
  res.status(200).json({ message: "User logged in successfully" });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});