const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your favorite JS framework? ', reply => {
    console.log('Answer: ', reply);

    rl.close()
})

