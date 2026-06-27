const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// middleware
// app.use((req,res, next) => {
   
//     console.log("hello i am middleware");
//     // res.send("middleware finished");
//     next();
//     // console.log("after next");
// })

// app.use("/random" , (req,res,next)=>{
//   console.log("only random");
//     next();
// });

// middleware , logger - morgan
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method , req.hostname , req.path , req.time);
//     next();
// });

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
   throw new ExpressError(401 , "ACCESS DENIED!");
};

app.get("/err", (req, res) => {
  abcd = abcd;
});


app.get("/admin", (req,res)=>{
    throw new ExpressError(403 , "Access to admin is forbidden");
});


//custom error handler
app.use( (err, req, res , next) => {
    let {status=500, message="Some error occurred" } = err;
    //default
    res.status(status).send(message);
//   console.log("------------ERROR----------");
//   res.send(err);
  //next will serach for next err handling middleware
});

// app.use( (err, req, res , next) => {
//   console.log("------------ERROR2----------");
//   next(err);

// });


app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("root");
})


app.get("/random", (req, res) => {
    res.send("random");
});
//404
app.use( (req, res) => {
    res.send("page not found");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
})


