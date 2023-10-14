const {MongoClient}= require("mongodb");
const url = "mongodb://127.0.0.1:27017/student";
// const url = "mongodb://127.0.0.1:27017/restro-rent";

const database ="student"
// const database ="restro-rent"

const client =new MongoClient(url);

async function dbConn(){
  let result =await client.connect();
  let db = result.db(database)
  // return db.collection("restro");
  return db.collection("student");
}

module.exports =dbConn;