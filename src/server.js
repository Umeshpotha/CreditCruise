const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
app.use(bodyParser.json());
app.use(cors())

const port = 4000;

mongoose.connect('mongodb://localhost:27017/login-loans', { })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  fullname: String,
  username: String,
  mobile: Number,
  pan: String,
  email: String,
  password: String
});

const loanTakerSchema = new mongoose.Schema({
  name: String,
  email: String,
  loanAmount: Number,
  loanTerm: Number,
  interestRate: Number
})

const User = mongoose.model('User', UserSchema, 'users');
const loanTaker = mongoose.model('loanTaker',loanTakerSchema,'loantakers');

app.post('/apply-loan', async (req, res) => {
  const { name, email, loanAmount, loanTerm, interestRate } = req.body;
  const loantak = new loanTaker({name, email, loanAmount, loanTerm, interestRate});
  try {
    await loantak.save();
    res.status(201).json({ message: "Loan Applicant request sent"});
  } catch (error) {
    res.status(500).json({ error: "Error sending loan request" });
  }
});

app.post('/register', async (req, res) => {
  const { fullname, username, mobile, pan, email, password, confirmPassword } = req.body;

  if(password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  const user = new User({ fullname, username, mobile, pan, email, password });
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
  res.status(200).json({ message: "User logged in successfully", user });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});