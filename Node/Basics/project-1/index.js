
const fs = require('fs');

console.log("Project started");
// fs.readFile('dummy.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data)
//     }
// });

const data = fs.readFileSync('dummy.txt', 'utf-8');
console.log(data)

fs.writeFile('dummy.txt', 'It is a new line', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File written');
    }
});

function hello(){
    console.log('This a JS function');
}

hello();


//Append, delete, create or delete a folder (Directory)




