const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));




const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '345689',
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//inserting new data
// let q = "INSERT INTO user(id , username , email , password) VALUES ? ";
// let data  = [];
// for(let i = 1; i <= 100; i++){
//       data.push(getRandomUser());
// }


//HOME ROUTE
app.get("/", (req, res) => {
  let q = 'SELECT count(*) FROM user';
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = (result[0]["count(*)"]);//key
      res.render("home.ejs" , {count});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

//SHOW USER ROUTE
app.get("/user",(req,res)=>{
  let q = "SELECT * FROM user";
   try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs" , {users});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }

});

//EDIT ROUTE
app.get("/user/:id/edit" , (req,res)=>{
  let {id} = req.params;
  let q = "SELECT * FROM user WHERE id='${id}'";
try {
    connection.query(q, (err, result) => {
      if (err) throw err;
     let user = result[0];
      res.render("edit.ejs",{user});
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
  res.render("edit.ejs");
});

//UPDATE ROUTE
app.patch("/user/:id" , (req,res)=>{
  let {id} = req.params;
  let {password : formPass ,username: newUsername} = req.body;
  let q = "SELECT * FROM user WHERE id='${id}'";
try {
    connection.query(q, (err, result) => {
      if (err) throw err;
     let user = result[0];
     if(formPass != user.password){
      res.send("WRONG password");
     }else{
      let q2 = "UPDATE user SET username='${newUsername}' WHERE id = '${id}'";
      connection.query(q2,(err , result) =>{
        if(err) throw err;
        res.redirect("/user");
      });
     }
  
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
 
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});



