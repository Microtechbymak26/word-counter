#! /usr/bin/env node 
// This line is called a shabang, it tells the os to run it with nodejs
// import the 'inquirer' modulule, which is a command line interface for Node.js
import inquirer from 'inquirer';
//Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentences",
        type: "input",
        message: "Enter your sentence to count the word "
    }
]);
const words = answers.sentences.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
