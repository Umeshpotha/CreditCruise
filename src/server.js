const { MongoClient } = require('mongodb');

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

storeUsernameAndAgent();
