// 4. Write a MongoDB query to insert 2 documents at once in collection(student) with  different names address,email,college,age,grades,marks,roll_number.
// const insertData = require("./mongodb/database");
// const ins =async ()=>{
//   const dt =await insertData();
//   const res = await dt.insertMany([
//     {name:"samar",age:"21",email:"sam@gmail.com" ,rollNo :255555, college:"Au",adress:"praygraj",grade:"A"},
//     {name:"ajay",age:"18",email:"ajay@gmail.com" ,rollNo :255555, college:"Au",adress:"praygraj",grade:"b"},
//     {name:"ak",age:"18",email:"sam@gmail.com" ,rollNo :255555, college:"Au",adress:"praygraj",grade:"b"}
//   ]
//   )
//   if(res.acknowledged){
//     console.log("data is insert");
//   }
//  }
//  ins()

//==================================================
// const insertData = require("./mongodb/database");
// const proje =async()=>{
//   const prj =await insertData();
//   const db =await prj.find({}).project({name:1,age:1,college:1}).toArray()
//   console.log(db);
// }
// proje()
//====================================================

// const srt =async()=>{
//   const st =await insertData();
//   const db =await st.find({}).sort({age:1}).toArray()
//   console.log(db);
// }
// srt()

//===================================================









//================================================
// const fnd =async()=>{
//   const fd =await insertData()
//   const st =await fd.updateOne({_id: ObjectID("652e1f0934f6b33ebcf14a20")},{$set:{name:"vijay",age:"22",email:"vijay@gmail.com"}})
//   console.log(st);
// }
// fnd()
//===============================================

//  const update1 =async()=>{
//    let ds =await insertData();
//    let jk =await ds.update({name:"ajay",},{
//     $set:{name:"jack"}
//    }
//    )
//   }
//  update1()
//=================================================
// const updateMy =async()=>{
//   let ud =await insertData();
//   const ut =await ud.updateMany({age:"19",},{
//     $set:{age:"26"}
//   })
// }
// updateMy()

//=================================================

// const deleteData = async () => {
//   let dt = await insertData();
//   let res = await dt.deleteOne({name:"ak" });
//   console.log(res);
// };
// deleteData();
// //================================================


