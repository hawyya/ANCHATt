


let hello = `

 _______ ______  _______ ___ ___ _______ _______ _______ 
|   _   |   _   ||   _   |  Y   |  _    |       |       |
|.  1   |.  |   |.  1___|.  1   |.  1   |.|   | |.|   | |
|.  _   |.  |   |.  |___|.  _   |.  _   '-|.  |-'-|.  |-'
|:  |   |:  |   |:  1   |:  |   |:  |   | |:  |   |:  |  
|::.|:. |::.|   |::.. . |::.|:. |::.|:. | |::.|   |::.|  
'--- ---'--- ---'-------'--- ---'--- ---' '---'   '---'  
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


let wait = "wating for other person to join..."
console.log(hello)
console.log(join)


function getRandomInt(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
 

let isRunning = true;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let quest = "1/2/3"


rl.setPrompt(quest + ":");
rl.prompt();

const { spawn } = require('child_process');

rl.on('line', (input) => {
  if (input.trim() === '1') {
    rl.close();
    const second = spawn('node', ['one,js']);
  } else if (input.trim() === '2') {
    let num = getRandomInt(100000, 999999)
    console.log("This is your disposable code: ")
    console.log(num)
  } else if(input.trim() === '3'){
    console.log("Thank you for using our application")
    isRunning = false;
  }

  rl.prompt();

  if (!isRunning) {
    rl.close();
  }
});

rl.on('close', () => {
  process.exit(0);
});

