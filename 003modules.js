//modules
// commonjs, every file in nodejs is module by default 
//modules - encapsulated ( only share a miminum code)


const names = require('./003names')
const sayHi = require('./003utils')
const uncle = require('./004alternative')
// names will be imported here in a dictionary setup or set to be frank

sayHi(names.john)
sayHi('peter')
sayHi(100)
sayHi(names.peter)

require('./005mind-grenade')