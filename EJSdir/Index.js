const express = require("express");
const app = express();


const path = require("path");
//path => package
const port = 8080;
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");

app.set("views" , path.join(__dirname , "/views"));
//set to this path

app.get("/", (req, res) => {
    
    res.render("home.ejs");
});



app.get("/ig/:username", (req, res) => {
    // const followers = ["alfee" , "akshat" ,"ashi"];
    // let {username} = req.params;
    // // console.log(username);
    let {username} = req.params;
    const instData = require("./data.json");
  
    const data = instData[username];
    console.log(data);
    res.render("instagram.ejs" , {data});
});



app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs" , {num : diceVal});
});


app.listen(port, () => {
    console.log('listening on port ${port}');
});

//interpolation refers to embedding expressions 
//into marked up text

