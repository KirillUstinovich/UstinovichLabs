let User = new Object();
let User1 = {};
let User3 = {
    name: "Kirill",
    surname:"Ustinovich",
    age: 21
};
console.log(User3.name)
console.log(User3.surname)
console.log(User3.age)
delete User3.age
console.log(User3)
let User4 = {
    name: "Kirill",
    surname:"Ustinovich",
    age: 21,
    pet: {
        name : "misha",
        type : "cat",
        color : "gray",
    },
};
console.log(User4)

let cat = {};
cat.voice = function (){
    console.log("Meow!");
};
cat.voice()


let User5 = {
    name: "Yakov",
    lastname: "Chumak",
    whoami: function() {
        console.log ("My name is " + this.name + " " + this.lastname)
    }
}
console.log(User5.whoami())