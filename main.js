

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

process.stdin.setEncoding('utf8');

process.stdout.write("press a button and then hit enter: ");

process.stdin.on('data', (input) => {
    const answer = input.trim();

    if (answer === '1') {
        console.log("You pressed 1");
    } else if (answer === '2') {
        console.log("You pressed 2");
    } else if (answer === '3') {
        console.log("You pressed 3");
    } else {
        console.log("No such answer");
    }

    process.exit();
});






