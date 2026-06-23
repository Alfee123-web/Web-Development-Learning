const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});
const User = mongoose.model("User", userSchema);
// //User => collection
// const Employee = mongoose.model("Employee" , userSchema);
// const user1 = new User({
//     name: "alfee",
//     email: "alfee@gmail.com",
//     age: 20
// });
// const user2 = new User({
//     name: "anshika",
//     email: "anshika@gmail.com",
//     age: 22
// });

// user2.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
//async function 

// User.insertMany([
// {
//     name: "anshika",
//     email: "anshika@gmail.com",
//     age: 22
// },
// {
//     name: "alfee",
//     email: "alfee@gmail.com",
//     age: 22
// },
// {
//     name: "ashi",
//     email: "ashia@gmail.com",
//     age: 23
// }

// ]).then((res)=>{
//     console.log(res);
// });

// User.find({age : {$gt : 22}}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name:"alfee"} , {age:40} , {new:true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

User.findOneAndDelete({name:"ashi"}).then((res)=>{
    console.log(res)
});