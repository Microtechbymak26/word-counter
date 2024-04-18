// import the 'inquirer' modulule, which is a command line interface for Node.js
import inquirer from 'inquirer'

//Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers:{
    sentences:string
} = await inquirer.prompt([
    {
        name:"sentences",
        type:"input",
        message:"Enter your sentence to count the word "
    }
])

const words = answers.sentences.trim().split(" ")

console.log(`Your sentence has ${words.length} words`)
