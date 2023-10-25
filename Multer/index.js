const express =require("express")
const multer =require("multer")
const app =express()

const ulode =multer({
    storage:multer.diskStorage({
       destination:function(req,file,cb){
        cb(null,"pdf")
       },
       filename:function(req,file,cb){
        cb(null,file.fieldname + "-"+ Date.now()+".pdf")
       }
    })
}).single("file_name")

app.post("/uplode",ulode,(req,resp)=>{
    resp.send("file is uplode")

})
app.listen(7100)