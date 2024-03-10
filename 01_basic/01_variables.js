const accountId = 2345
let accountNmae = "Rohan"
var accountPassword = "1234"
accCity = "jaipur"

// accountId = 45667 (Not allowed) TypeError: Assignment to constant variable.

accountNmae = "Hitesh"

console.log(accountId)

// prefer not to use var beacause it has problem of scope

console.table([accountId, accountNmae, accCity, accountPassword])