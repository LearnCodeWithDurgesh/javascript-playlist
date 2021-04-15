/*
Variables:
    let ,const , var
*/

// let message;declaration
// message = "Hey , How are you?";//assignment

//declartion+assignment
let message = "hey , where are you from?";

console.log(message);

let a = 12,
  b = 23,
  c = 78;
console.log(a);
console.log(b);
console.log(c);

//main property
message = "hey , i am fine";
console.log(message);

//creating cnostant in javascript

const user = "CodeWithDurgesh";
console.log(user);
// user = "ProgrammingWithDurgesh";

if (5 > 2) {
  console.log("inside block");
  let address = "Delhi";
  console.log(address);
  var city = "delhi";
  console.log(city);
}

// console.log(address);
//var: global or function scope
//var has no block scope
console.log(city);
//“var” tolerates redeclarations
var x = 56;
var x = 89;
console.log(x);
console.log(x);
// “var” variables can be declared below their use
z = 56;
console.log("value of z is ", z);
var z;

//naming rule
/*
1. aplhabet, but it can not start from digit
2. name must contain only letters , digits, or symbols $ and _
3. keywords can not be used as variable name
4. case senstive
*/
let aBC = 24;
console.log(aBC);
let my_name$is = "Durgesh";
console.log(my_name$is);

// let var = 34;

let Const = "let me do it";
let Let = "I am not goning to do it";
console.log(Const);
console.log(Let);
