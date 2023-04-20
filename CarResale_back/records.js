const { param } = require("express/lib/application");
const req = require("express/lib/request");
const fs = require("fs");

function generateRandomId() {
  return Math.floor(Math.random() * 10000);
}

/**
 * Gets all cars
 * @param None
 */
function getData()  {
    let url = "http://localhost:7000/getcars"

    fetch(url)
        .then(response => {
            if (response.ok)    {
                console.log("Great Success")
            } else {
                console.log("There was a problem fetching the data", "alert-warning")
            }
            return response.json()
        })
        // .then(response=> response.json())
        .then(data => printUsers(data))
        .catch(err => updateAlert("An Error has occurred: " + err, "alert-danger"))
}


/**
 * Creates a new user record 
 * @param {Object} newRecord - Object containing info for new user: the user title and username 
 */
async function createUser(newRecord) {
  console.log("createUser start-->>>");
  // console.log(newRecord);
  let newUser = await getUsers();
  console.log(newUser);
  console.log("after await get user -->>>");
  newRecord.id = generateRandomId();
  newUser.push(newRecord);

  await save(newUser);

  console.log("after await save -->>>");
  return newRecord;
}

const { MongoClient } = require('mongodb');

async function getUsers() {
  const uri = 'mongodb+srv://tushar:tushar@tushar.y0ky74s.mongodb.net/test';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('tushar');
    const collection = database.collection('myCollection');
    const users = await collection.find().toArray();

    console.log('Retrieved users from MongoDB Atlas');
    return users;
  } catch (err) {
    console.log('Error connecting to MongoDB Atlas:', err);
    throw err;
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB Atlas');
  }
}


