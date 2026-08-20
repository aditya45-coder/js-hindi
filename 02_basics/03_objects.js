//Singleton
// object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Aditya",
    "full name": "Aditya mourya",
     [mySym]: "mykey1",
    age: 18,
    Location : "Mumbai",
    email : "aditya@google.com",
    isLoggedIn: false,
    LastLoginday : ["Monday" , "Saturday "]
}

 //console.log(JsUser.email)
 //console.log(JsUser["email"]);
 //console.log(JsUser["full name"]);
 //console.log(JsUser[mySym]);

 JsUser.email = "aditya@chatgpt.com"
 Object.freeze(JsUser)
 JsUser.email = "aditya@micro.com"
 console.log(JsUser);

 JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 