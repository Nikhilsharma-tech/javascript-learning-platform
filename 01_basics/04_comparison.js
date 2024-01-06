// simple conversion means conversion in same datatype
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 == 1)
// console.log(1 < 5)
// console.log(1 >= 5)
// console.log(3 <= 3)
// console.log(2 != 2)


// when we done comparison between different datatype like we compare between string and number then it convert in number then compare done.
// console.log("2" > 1)
// console.log("2" == 1)
// console.log("3" >= 1)
// console.log("4" <= 3)

// that type conversion gives different output
// for null => Gives different value
// console.log(null == 0)
// console.log(null >= 0)
// console.log(null <= 0)
// console.log(null > 0)
// console.log(null < 0)

// for undefined => it gives always false
// console.log(undefined == 0)
// console.log(undefined >= 0)
// console.log(undefined <= 0)
// console.log(undefined > 0)
// console.log(undefined < 0)

// strict check. It is denoted by "==="
// === strict check means it doesn't convert string value in number. strict check done between in only same number. If we give differ datatypes then it gives false.

console.log("2" === 2) // comparison between string and number => gives false output

console.log(2 === 2) // comparison between same datatype => gives true output
