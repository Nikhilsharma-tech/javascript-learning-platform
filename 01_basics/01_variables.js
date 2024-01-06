const accountId = 2345
let accountEmail = "nikhil@gmail.com"
var accountPassword = "nik@123"
accountCity = "jaipur"
let accountState;

// accountId = 1234
accountEmail = "lohg123@gmail.com"
accountPassword = "logi@123"
accountCity = "delhi"

/* Prefer not to use var
because of issue in block scope and functional scope.
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
