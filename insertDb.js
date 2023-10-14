// 4. Write a MongoDB query to insert 2 documents at once in collection(student) with  different names address,email,college,age,grades,marks,roll_number.

// const insertData =require("./database");
// const insert =async ()=>{
//   const dt =await insertData();
//   const res = await dt.insert([
//     {name:"sachin",age:"24",email:"sudhish@gmail.com",roll_no:"652856",grade:"A"},
//     {name:"adam",age:"23",email:"adarsh@gmail.com",roll_no:"545856",grade:"B"}
//   ]
//   )
//   //  console.log(res);
//   if(res.acknowledged){
//     console.log("data is insert");
//   }
// }
// insert()
// const deleteData = async () => {
//         let dt = await insertData();
//         let res = await dt.deleteOne({name:'sachin'});
//         // console.log(res1);
//         if (res.acknowledged) {
//           console.log("data is deleted");
//         }
//       };
//       deleteData();