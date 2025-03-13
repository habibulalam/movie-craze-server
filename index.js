require('dotenv').config()
const cors = require('cors');
const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 3002;

// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASS);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@habib.h5iff.mongodb.net/?retryWrites=true&w=majority&appName=HABIB`;

// Middleware
app.use(cors());
app.use(express.json())

// initial get method on server start
app.get("/", (req, res) => {
    res.send("Server is running")
})


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const movieCollections = client.db("movieDB").collection('movieInfo')

        app.get("/movies", (req, res) => {

        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //   await client.close();
    }
}
run().catch(console.dir);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})