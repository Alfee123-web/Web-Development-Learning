const mongoose = require("mongoose");
const Chat = require("./models/chat");

main().then(() => {
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allchats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "amit",
        msg: "hey, did you finish the physics assignment?",
        created_at: new Date(),
    },
    {
        from: "priya",
        to: "neha",
        msg: "yes, just emailed them to you. check your inbox!",
        created_at: new Date(),
    },
    {
        from: "rahul",
        to: "sneha",
        msg: "are we meeting at the library at 4 PM today?",
        created_at: new Date(),
    },
    {
        from: "ananya",
        to: "vikram",
        msg: "don't forget to get the project printouts.",
        created_at: new Date(),
    },
    {
        from: "kabir",
        to: "tanya",
        msg: "can you share the link for the online quiz?",
        created_at: new Date(),
    }
];

Chat.insertMany(allchats);
