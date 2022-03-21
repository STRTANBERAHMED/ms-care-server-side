const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
// const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gezhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        console.log('database connect successfully');
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('hello bro mscare');
});

app.listen(port, () => {
    console.log('Listening to port', port);
})