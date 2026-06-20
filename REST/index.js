const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4 : uuidv4 } = require('uuid');
//random unique id 
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id: uuidv4(), // ⇨ 'ab16e731-6cee-424d-81a0-5929e9bdb0cc'
    username: "alfeekhan",
        content: "i love coding",
    },
{
    id:uuidv4(), 
    username: "akshattrivedi",
        content: "i love making projects",
},
{
    id:uuidv4(), 
    username: "ashikhan",
        content: "i got selected for my internship"
},
];


app.get("/posts", (req, res) => {
    res.render("index.ejs" , {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});


app.post("/posts", (req, res) => {
let{username , content} =  req.body;
let id = uuidv4();
posts.push({id , username , content});
    res.redirect("/posts");
    //get request
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
   let post = posts.find((p) => id === p.id);
    res.render("show.ejs" , {post});
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    // console.log(newContent);
    
   let post = posts.find((p) => id === p.id);
   post.content = newContent;
      console.log(post);
    res.redirect("/posts");
});


app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs");
});

app.delete("/posts/:id", (req,res)=>{
        let {id} = req.params;
  posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");

})

app.listen(port, () => {
    console.log("listening to port : 8080");
});


