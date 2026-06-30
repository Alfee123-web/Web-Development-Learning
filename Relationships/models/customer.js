const mongoose = require("mongoose");
const { Schema } = mongoose;


main()
    .then(() => console.log("connection successfull"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item : String,
    price: Number,
   
}); 

const customerSchema = new Schema({
    name : String,
   orders:[
    {
        type:Schema.Types.ObjectId,
        ref : "Order",
    },
   ]
   ,
}); 

// customerSchema.pre("findOneAndDelete" , async() =>{
//     console.log("PRE MIDDLEWARE")
// });

customerSchema.post("findOneAndDelete" , async(customer) =>{
    if(customer.orders.length){
      let res = await Order.deleteMany({_id:{$in :  customer.orders}});
      console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


// const findCustomer = async () => {
//    let cust1 = new Customer({
//     name: "akshat trivedi",
//    });
//    let order1 = await Order.findOne({item :"chips"});

//    let order2 = await Order.findOne({item :"biscuit"});

   
//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await Customer.find({}).populate("orders");
//   console.log(result[0]);
// };

//   findCustomer();


// const addOrders = async () => {
//    let res =  await Order.insertMany([
//         {item : "Samosa" , price:12 },
//         {item : "chips" , price:22 },
//         {item : "biscuit" , price:32 },

//    ]);
//     console.log(res);
       
// };
// addOrders();
 const newCust = async() =>{
    let newCust = new Customer({
        name:"karan arjun"
    });
    let newOrder = new Order({
        item:"piza",
        price:250,
    });
    newCust.orders.push(newOrder);
     
    await newOrder.save();
    await newCust.save();
   console.log("added new customer");
 };

 const delCust = async() => {
     let data = await Customer.findByIdAndDelete("6a429866f3bf4dbb4df07f89");
    

    console.log(data);
 }
 delCust();
// const findId = async () => {
//     let cust = await Customer.findOne({});
//     console.log(cust);
// };
// findId();