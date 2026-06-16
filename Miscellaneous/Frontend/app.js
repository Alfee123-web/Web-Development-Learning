// const stu1 = {
//     name:"alfee",
//     age:30,
//     marks:100,
// };
// let arr = [1,2,3];
// let arr2 = [4,5,6];
// arr.sayHello = () => {
//     console.log("heloo I am ARR");
// }
// arr2.sayHello = () => {
//     console.log("heloo I am ARR2");
// }

//FACTORY FUNCITON
// function PersonMaker(name , age){
//     const person = {
//         name: name,
//         age:age,
//         talk(){
//             console.log(`hi my name is ${this.name}`);
//         },
//     };
//     return person();
// }

// let p1 = PersonMaker("alfee" , 20);//copy
// let p2 = PersonMaker("ashi" , 70);//copy


//constructor function => start with capital letter and does not return anything
// function Person(name , age){
//        this.name = name;
//        this.age = age;
//        console.log(this);
// }

// Person.prototype.talk = function() {
//     console.log(`hi my name is ${this.name}`);
// };
// //both are using same function talk
// let p1 = new Person("alfee" , 20);
//  let p2 = new Person("ashi" , 70);

//new = > creates a instance of user defined object

//using class
//  class Person{
//     constructor(name , age){
//        this.name = name;
//        this.age = age;
//     }
//     talk() { 
//       console.log(`hi my name is ${this.name}`);
//      }
//     }

// let p1 = new Person("alfee" , 20);
// let p2 = new Person("ashi" , 70);


class Person {
    constructor(name, age) {
        console.log("person class const")
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`hi my name is ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, age, marks) {
        console.log("student class const")
        super(name, age);
        //parent class const being called
        this.marks = marks;
    }

}


class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        //parent class const being called
        this.subject = subject;
    }
}

