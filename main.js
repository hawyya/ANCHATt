


let hello = `

 _______ _______ ______ _______ _______ _______ _______ 
|   _   |    |  |      |   |   |   _   |_     _|_     _|
|       |       |   ---|       |       | |   |   |   |  
|___|___|__|____|______|___|___|___|___| |___|   |___| 
`

let join = `
 __________________________
|                          |          
|  press 1 to join         |   
|                          |   
|  press 2 to create room  |   
|                          |   
|  press 3 to exit         |   
|__________________________|
`

let enCode = `
 _____________________
|                     |
|enter your room code |
|_____________________|
` 



console.log(hello)
console.log(join)

const readln = require('readline')
const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomInt(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
let tr = true
    rl.question("1/2/3: ", (answer => {
                if(answer === '1'){
                    console.clear();
                    const one = require('./one.js');
                }else if(answer === '2'){
                code = (getRandomInt(100000,999999))
                console.log(code)
                }else if(answer === '3'){
                    
                }else{
                    console.log("no such anwser")
                }
                rl.close()
}),)








