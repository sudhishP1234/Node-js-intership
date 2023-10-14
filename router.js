const express =require("express");
const reqFilter =require("./midleware")
const app =express()
const route =express.Router()

// app.use(reqFilter);
route.use(reqFilter)

app.get("/",(req,resp)=>{
    resp.send("welcome to home page")
})

app.get("/users",reqFilter,(req,resp)=>{
    resp.send("welcome to user page")
});
route.get("/about",(req,resp)=>{
    resp.send("welcome to about page")
})
route.get("/contect",(req,resp)=>{
    resp.send("welcome to contect page")
})

app.use("/",route);
app.listen(4000);




















//=========================================
// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//     console.log(`Request received at ${new Date()}`);
//     next();
// });

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
