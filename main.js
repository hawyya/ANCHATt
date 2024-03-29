


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
const internal = require('stream')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let quest1 = "1/2/3"
let blank = ""
let quest2 = "do you want to create room? y/n"
let quest3 = "write 'e' to exit"


rl.setPrompt(quest1 + ":");
rl.prompt();


rl.on('line', (input) => {
  if (input.trim() === '1') {

  } else if (input.trim() === '2') {
    rl.setPrompt(quest2 + ':')
    rl.on('line', (input) =>{
        if(input.trim() === 'y'){
            console.clear()    
            console.log("This is your disposable room code!Now you can share it to a friend")    
            num = getRandomInt(100000, 999999)
            console.log(num)
            console.log("waiting for your friend to join...")
        rl.setPrompt(quest3 + ':')
        rl.prompt()}
        else if(input.trim() === 'n'){
            console.log(hello)
            console.log(join)
        }
        else if(input.trim() === 'e'){
            console.log(hello)
            console.log(join)
        }
    })
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
