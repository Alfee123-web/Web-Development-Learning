const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main().then(() => {
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}

//INDEX ROUTE
app.get("/chats", asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    res.render("index", { chats });
}));

//NEW ROUTE
app.get("/chats/new", (req, res) => {
    throw new ExpressError(404, "page not found");
    res.render("new.ejs");
});

//CREATE ROUTE
app.post("/chats", asyncWrap(async (req, res, next) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
}));

//show route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        return next(new ExpressError(404, "chat not found"));
    }
    res.render("edit.ejs", { chat });
}));

//EDIT ROUTE
app.get("/chats/:id/edit", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}));

//UPDATE ROUTE
app.put("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true });
    console.log(updatedChat);
    res.redirect("/chats");
}));

//DELETE ROUTE
app.delete("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
}));

app.get("/", (req, res) => {
    res.send("root is working");
});

const handleValidationErr = (err) =>{
    console.log("please follow rules");
    console.dir(err.message);
    return err;
};

app.use((err, req, res, next) => {
   console.log(err.name);
   if(err.name === "ValidationError"){
    err = handleValidationErr(err);
   }
  next(err);
});


//error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error occurred" } = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
})
