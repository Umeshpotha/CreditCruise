const { MongoClient } = require('mongodb');
const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

const uri = "mongodb://localhost:27017";
const dbName = "logins-loans";

const userCollectionName = "users";
const agentCollectionName = "agents";

const username = "john";
const agentName = "obama";

async function storeUsernameAndAgent() {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const database = client.db(dbName);

    const userCollection = database.collection(userCollectionName);
    const agentCollection = database.collection(agentCollectionName);

    const existingUser = await userCollection.findOne({ username });
    const existingAgent = await agentCollection.findOne({ agentName });

    if (existingUser) {
      throw new Error("Username already exists!");
    } else if (existingAgent) {
      throw new Error("Agent name already exists!");
    }

    const userDoc = { username };
    const agentDoc = { agentName };

    const userInsertResult = await userCollection.insertOne(userDoc);
    const agentInsertResult = await agentCollection.insertOne(agentDoc);

    console.log("Username inserted successfully:", userInsertResult.insertedId);
    console.log("Agent name inserted successfully:", agentInsertResult.insertedId);

    await client.close();
  } catch (error) {
    console.error("Error storing username or agent name:", error.message);
  }
}
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if both username and password are provided
  if (!username ||!password) {
    return res.status(400).send('Both username and password are required.');
  }

  // Find the user in the database
  const user = await User.findOne({ username }).exec();

  // If the user doesn't exist, return an error
  if (!user) {
    return res.status(401).send('Invalid username or password.');
  }

  // Compare the provided password with the stored hash
  const isPasswordValid = await user.comparePassword(password);

  // If the password is incorrect, return an error
  if (!isPasswordValid) {
    return res.status(401).send('Invalid username or password.');
  }

  // If the credentials are correct, return a success message or a token for authentication
  res.send('Login successful!');
});

module.exports = router;

storeUsernameAndAgent();
