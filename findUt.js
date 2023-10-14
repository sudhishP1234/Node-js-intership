
// 5. Write a MongoDB query to display all the students with age equal to 18.

// const findData  =require("./database");
// const main =async ()=>{
//   let data =await findData();
//   data = await data.find({age:"18"}).toArray();
//   console.log(data);
// }
// main()

// data update ke liye============

// const update =async()=>{
//   let data =await findData();
//   let res1 =await data.updateOne(
//     {name:"sumit",},{
//       $set: {age:25}
//     }
//   );
// }
// update()

// data ko  delete krna================

// const deleteData = async () => {
//   let data = await findData();
//   let res1 = await data.deleteOne({ name: "vagish" });
//   // console.log(res1);
//   if (res1.acknowledged) {
//     console.log("data is deleted");
//   }
// };
// deleteData();
