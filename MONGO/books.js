const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection successful");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
         maxLength:20,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction" , "non-fiction"],
    }

});

const Book = mongoose.model("Book" , bookSchema);

Book.findByIdAndUpdate(("6a3a1064d78cd1eef50c051a"),
{price:-100},
{runValidators:true}
)
.then((res)=>{
    console.log(res);
})
.catch((res)=>{
    console.log(res);
});

// let book1 = new Book({
//     title:"English",
//     author:"Alfee",
//     price:1200,
//     category:fiction,
   


// });
// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });