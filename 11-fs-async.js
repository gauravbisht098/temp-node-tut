const { readFile, writeFile } = require('fs');

console.log('Start');
readFile('./content/first.txt', 'utf8',
    (err,result) => {
        if(err){
            console.log(err);
            return
        }
        const first = result;
        
        readFile('./content/second.txt', 'utf8', 
        (err,result) => {
            if(err){
                console.log(err);
                return
            }
            const second = result;

        writeFile('./content/result-async.text',
                `Here is the result: ${first}, ${second}`,
                (err,result) => {
                    if(err){
                        console.log(err);
                        return
                    }
                    //console.log(result);
                    console.log('Done with this task.');
                })
        })
    })
console.log('Starting the new task.');