const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)


// details about the current operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS.freeMem)
console.log(currentOS.totalmem)
console.log(currentOS.name)
console.log(currentOS.release)

console.log(currentOS)
