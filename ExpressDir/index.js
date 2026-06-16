const express = require("express");

const app = express()

let port = 8080;
app.listen(port, () => {
    //listen for incoming request
  console.log('app is listening on port ${port}');
})

// app.use((req, res) => {
// console.log("request recieved")
// res.send("this is basic response");
// });

app.get("/" ,(req,res) => {
    res.send("hello");
})

//NODEMON => automatically restart server with code changes
app.get("/:username" ,(req,res) => {
    console.log(req.params)
    res.send("hello");
});


app.get("/search" ,(req,res)=>{
    console.log(req.query);
    res.send("success");
})
//EJS => embedded javascript templates
//ejs is a simple templating language that lets you generate HTML markup with plain 
//javascript