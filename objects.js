let testUser = new Object();

testUser.name ="Oksana";
testUser.age = 37;
testUser.city ="Barcelona";

console.log(testUser);

let testUserLiteral ={
    name :"Oksana",
    age :37,
    city:"Barcelona" 
}

console.log(testUserLiteral)

let testUserArray = new Array("Oksana","37","Barcelona");

console.log(testUserArray)

let testUserFunction = new Function(
    "userName",
    "age",
    "city",
    "return userName + age + city"
)

console.log(testUserFunction("Oksana","37","Barcelona"))
  
let testUserSimple ={
    name :"Oksana",
    age :37,
    "city-default":"Barcelona" 
}

console.log(testUserSimple)


//let newProp = "car"
//testUserSimple['car'] ="Ford"
// testUserSimle.car = "Ford"
//console.log(testUserSimple)

if(testUserSimple.age > 30){
    console.log("we can offer a credit for you")
} else {
    console.log("You are too young")
}