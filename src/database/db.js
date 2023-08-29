const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://prvd_dev:xJdTQZ5VPeB9V9wm@cluster0.cu4ht07.mongodb.net/evoting-app?retryWrites=true&w=majority";
const mongoose = require("mongoose");

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Couldn't connect to MongoDB");
  });

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
/* const client = new MongoClient(uri, {
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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); */
