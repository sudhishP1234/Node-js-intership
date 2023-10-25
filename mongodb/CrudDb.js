
// const {MongoClient} =require("mongodb");
// const Url ="mongodb://127.0.0.1:27017/";
// const db ="College";
// const nodeC =new MongoClient(Url)
// // console.log(nodeC);

// async function mongoConn(){
//   let cnect = await nodeC.connect()
//   let dbc =  cnect.db(db)
//   return dbc.collection("stu")
// }
// mongoConn()

// const inst =async()=>{
//   let dts =await mongoConn()
//   let cd = await dts.insertMany([
//     {name:"sam-vaker",age:"25",class:"Bca",rollNo:"2643",grade:"a",score:"85"},
//     {name:"sam-jack",age:"22",class:"B.tech",rollNo:"2843",grade:"a",score:"95"},
//     {name:"ad-walk",age:"21",class:"Bsc",rollNo:"2743",grade:"b",score:"45"},
//     {name:"rd-walk",age:"27",class:"Bca",rollNo:"2653",grade:"d",score:"40"},
//     {name:"jam-jack",age:"24",class:"Ba",rollNo:"2613",grade:"c",score:"35"},
//     {name:"sam-vaker",age:"29",class:"B.com",rollNo:"2663",grade:"d",score:"65"},
// ])
//   console.log(cd);

// // let fd =await dts.find({}).toArray()
// // console.log(fd);

// // const ud =await dts.update({age:"25"},{$set:{age:"28"}})
// // console.log(ud);

// // const ud1=await dts.updateMany({age:{$gt:"25"}},{$set:{all:"Adult"}})
// // console.log(ud1);

// // const lt =await dts.find({age:{$lt:"25",$gt:"20"}}).toArray()
// // console.log(lt);

// // const delet =await dts.deleteOne({name:"sam-vaker"})
// // console.log(delet);

// // const pro =await dts.find({}).project({name:1,age:1,grade:1}).toArray()
// // console.log(pro);

// // const rgx =await dts.find({name:/^ad-walk/}).toArray()
// // console.log(rgx);

// // const cment =await dts.find({name:/.*jack.*/}).toArray()
// // console.log(cment);

// // const skp =await dts.aggregate([{$skip:2}]).toArray()
// // console.log(skp);

// // const cont =await dts.find({grade:"a"}).count()
// // console.log(cont);

// // const renam =await dts.updateMany({name:"jam-jack"},{$rename:{'name':'named'}})

// // const renam =await dts.updateMany({named:"jam-jack"},{$rename:{'named':'name'}})

// // const renam =await dts.updateOne({name:"jam-jack"},{$unset:{name:1}})

// // const fieldadd =await dts.update({age:"24"},{$set:{name:"jam-waker"}})

// // let fieldadd=await dts.updateMany({},{$set:{college:"AU"}})

// //  const renam =await dts.updateMany({},{$unset:{college:"AU"}})

// // const aggr =await dts.aggregate([{$match:{name:"jam-waker"}}]).toArray()

// // console.log(aggr);
// }
// inst()

