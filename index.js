// const fs = require('fs')

const { readFile, readFileSync } = require('fs')

function personJob() {
     const data = readFileSync('data.json', 'utf-8')
     // blocks here until file is read
     return data
 }

console.log('Non-async:', personJob())


function personJobAsync() {
    readFile('data.json', 'utf-8', (err, data) => {
        if (err) throw err
        console.log('This is the Async Data:')
        console.log(data)
    })
}

personJobAsync()
// needed to make name of function different from personJob

console.log('This should print before async_Peter')

console.log('Async_Peter')