const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
var { MongoClient } = require('mongodb');
var url = 'mongodb+srv://marketAI:abcd1234@marketai-cluster1.4m8j0.mongodb.net/marketAI-DB?retryWrites=true&w=majority';
var db = null;
var client = null;

async function connect() {
    if (db == null) {
        var options = {
            useUnifiedTopology: true,
        };
        client = await MongoClient.connect(url, options);
        db = await client.db("marketAI-DB");
    }

    return db;
}


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/api/signup", async (req, res) => {
    var conn = await connect();
    const email = req.body.email
    const userName = req.body.username
    const password = req.body.password
    conn.collection('users').insertOne({ email: email, username: userName, password: password }, (err, result) => {
        console.log(result)
    })
})



app.listen(3001, () => {
    console.log("running on port 3001")
})