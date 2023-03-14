const {readFileSync, writeFileSync} = require('fs');

//to read we need to provide path and encoding
//open file using read file sync
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first +"\n" + second)

//create new file using write file sync
writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`,
{flag: 'a'}
)