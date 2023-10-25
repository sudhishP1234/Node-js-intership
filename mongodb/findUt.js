
// 5. Write a MongoDB query to display all the students with age equal to 18.
  //  data ko read krne ke liye 
  
// const findData  =require("./mongodb/database");
// const main =async ()=>{
//   let data =await findData();
// //   console.log(data);
//     data1 = await data.find({age:"18" }).project({name:1,age:1,email: 1,
//     rollNo: 1,
//     college: 1,
//     adress: 1,
// }).toArray();
//    console.log(">>>>>>>>>>>.",data1);
//    return data1
// }
// main()

// data update ke liye==================

// const update =async()=>{
//   let data =await findData();
//   let res1 =await data.updateOne(
//     {name:"sumit",},{
//       $set: {age:"18"}
//     }
//   );
// }
// update()

// data ko  delete krna===================

// const deleteData = async () => {
//   let data = await findData();
//   let res1 = await data.deleteOne({ name: "vagish" });
//   // console.log(res1);
//   if (res1.acknowledged) {
//     console.log("data is deleted");
//   }
// };
// deleteData();
