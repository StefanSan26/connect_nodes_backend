// const { MongoClient } = require('mongodb');
const db = require("mongoose");

const url = process.env.mongodbURI;
// console.log(url)
db.connect(url)
console.log('DB conectada con exito')

// const client = new MongoClient(url);

// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);
