npm install keypress


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



console.log(hello)
console.log(join)

// const readln = require('readline')
// const rl = readln.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("press a button and then hit enter: ", (answer => {
//     if(answer ==+ '1'){
//         console.log("u pressed 1")
//     }else if(anwser ==+ '2'){
//         console.log("u pressed 2")
        
//     }else if(anwser === '3'){
//         console.log("u pressed 3")
//     }else{
//         console.log("no such anwser")
//     }
//     rl.close()
// }),)


const keypress = require('keypress');

keypress(process.stdin)

// Слушаем события нажатия клавиш
process.stdin.on('keypress', function (ch, key) {
    if(key && key.name === '1'){
        console.log("q")
    }else if(key && key.name === '2'){
        console.log('qq')
    }else if(key && key.name === '3'){
        console.log("qqq")
    }else{
        console.log("adfadff")
    }
});

// Включаем режим "raw"
process.stdin.setRawMode(true);
process.stdin.resume();


