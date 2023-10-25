// const express = require("express");
// const mongodb=require("mongodb")
// const Apiconnec = require("./mongodb/database");
// const app = express();
// app.use(express.json());

// app.get("/", async (req, resp) => {
//   let da = await Apiconnec();
//     dc = await da.find().toArray();
// dc =await da.aggregate([{$match: {name:"sam-vaker"}}]).toArray()
//  dc =await da.aggregate([{$match: {score:{$gt: "48"}}}]).toArray()
// dc=  await da.update({rollNo:"2483"},{$set:{score:"96"}})
// dc=  await da.updateMany({ },{$set:{college:"JNU "}})
// dc= await da .deleteMany({alt:"Adult"})

//     // dc =await da.updateMany({ },{$rename:{name:"fullName"}})

//   dc = await da.find({ age: { $gt: "27" } }).toArray();
//  dc = await da.deleteOne({name:"ad-walk" })
//  console.log(dc);
//   resp.send(dc);
// });

// app.post("/", async (req, resp) => {
//   let db = await Apiconnec();
//   let result = await db.insert(req.body);
//   resp.send(result);
// });

// app.put("/:xyz", async (req, resp) => {
//    let dt =await Apiconnec()
//    let res =dt.updateOne({name:req.params.xyz},{$set:req.body})

//    resp.send({result:"update"})
// });
// app.delete("/:id", async(req, resp) => {
//   let delt = await Apiconnec()
//   let dt = await delt.deleteOne({_id:new mongodb.ObjectID(req.params.id)})
//   resp.send({result:"deleted"})
// })

// app.listen(6000);
