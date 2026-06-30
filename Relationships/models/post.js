const mongoose = require("mongoose");
const { Schema } = mongoose;


main()
    .then(() => console.log("connection successfull"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email:Number,
});

const postSchema = new Schema({
    content: String,
    likes :Number,
    user : {
        type:Schema.Types.ObjectId,
        res:"User",
    }
});
//store parent (user) under child document

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async() => {
//     let user1 = await User.findOne({username:"ashikhan"});

//   let post1 = new Post({
//       content : "Hello World!",
//       likes : 10,
//   });
//   let post2 = new Post({
//       content : "bieeee",
//       likes : 11,
//   });

//   post2.user = user1;

// //   await user1.save();
//   await post2.save();
// }
// addData();

const getData = async() => {
    let res = await Post.findOne({}).populate("user" , "username");
    console.log(res);
};
getData();