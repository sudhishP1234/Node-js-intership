// const data =[
    //     {name:'sudhish',email:"sudhi@gmail.com",age:26},
    //     {name:'sam',email:"sam@gmail.com",age:28},
    //     {name:'raju',email:"raju@gmail.com",age:29},
    //     {name:'golu',email:"golu@gmail.com",age:30}
    // ]
    // module.exports=data;
    
    
//=============file is add,delete,and create folder===========
// const fs =require("fs")
// const input =process.argv;
// if(input[2]=="add"){
// fs.writeFileSync(input[3],input[4])
// }else if(input[2]=="remove"){
//     fs.unlinkSync(input[3])

// }else{
//     console.log("invalid input");
// }

//===================================

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "file");
// //console.log(dirPath,"file");
// for (i = 0; i < 5; i++) {
//   //fs.writeFileSync(`sam${i}.txt`,"a simple file")
//   fs.writeFileSync(dirPath + "/sam" + i + ".txt", "simple file");
// }

// // fs.readdir(dirPath,(err,file)=>{
// //     console.log(file)
// // })

//           //  or //
// fs.readdir(dirPath,(err,file)=>{
//     file.forEach((item)=>{
//         console.log(item);
//     })
// })

// ONE FILE IS CREATED READ UPDATED DELETE=======================

// const fs = require("fs");
// const path = require("path");
// const dirPath1 = path.join(__dirname, "file");
// const filePath1 = `${dirPath1}/orange.txt`;
// fs.writeFileSync(`${filePath1}`, "filepath is ready to file folder")
//   //===========//
// console.log(`${dirPath1}/apple.txt`, 'this is a file');
//============//
//  fs.readFile(filePath1,"utf-8",(req,item)=>{
//     console.log(item);
//  })


// fs.appendFile(filePath1,'and file updated',(err)=>{
//     if(!err){
//         console.log("file is updated");
//     }
// })

// fs.rename(filePath1, `${dirPath1}/jam.txt`,(err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

//  fs.unlinkSync(`${dirPath}/file`)

 // const d =require("fs")
// d.writeFileSync('ajax.html',"html file")

//=====================================
// //  16 episode
//  let a =20 ;
//  let b= 9;

//  let wait =new Promise((resolve, reject) => {
//     setTimeout(() => {

//     resolve(30)
//     }, 2000);
//  })

//  wait.then((b)=>{
//  console.log(a+b)
//  })

// //==============================
// events
// const EventEmitter = require('events');

// // Ek custom event emitter create karein
// const myEmitter = new EventEmitter();

// // Event listener attach karein
// myEmitter.on('customEvent', () => {
//   console.log('Custom event occurred.');
// });

// // Event emit karein
// myEmitter.emit('customEvent');
// //========================
// // npm
// // event driven application
// // express.js
// // for in key

