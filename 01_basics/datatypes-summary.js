// Basically datatypes are of two types
// 1 => Primitive
// 2 => Non Primitive

// primitive => primitive datatype are of 7 types-
// 7 types are- String, Number, Boolean, Null, undefined, BigInt, Symbol

const score = 100
const scorevalue = 100.3

const isLoogedIn = false
const outSideTemp = null
let userEmail;

const Id = Symbol('321')
const anotherId = Symbol('321')

console.log(Id == anotherId)

const BigNumber = 12376542753987533275n

// Non  Primitive (Non Primitive is also called as "Reference")=> 3 types
// Array, Objects, Functions


// for Array
const names = ["Nikhil", "Ojas", "Rajdeep", "Om"] //declare array

// for object
let Myobj={
    Name: "NIkhil Sharma",
    Age: 19,
    City: "Kanpur",
} //object declare

// for function
const myFunction = function(){
    console.log("Hello world")
}

// check typeof all datatypes
console.log(typeof (BigNumber))