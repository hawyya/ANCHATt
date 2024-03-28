const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askForRoomNumber() {
    rl.question("Enter room number: ", (answer) => {
        if (answer === '1') {
            let code = getRandomInt(100000, 999999);
            console.log(code);
        }

        rl.question("Do you want to enter another room number? (yes/no) ", (answer) => {
            if (answer === 'yes') {
                askForRoomNumber(); // Recursive call to continue asking for room number
            } else {
                rl.close();
            }
        });
    });
}

askForRoomNumber();
