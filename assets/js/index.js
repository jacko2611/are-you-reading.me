// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a detailed description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please write any installation instructions necessary',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'Any usage information the user should know about?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List any collaborators, along with their Github profiles and any sources that need attribution',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please detail any testing the user may perfom?',
        name: 'testing'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github',
    },
]
inquirer.prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
    fs.writeFile(fileName, data, function(error) {
        console.log(fileName);
        console.log(data);
        if (error) {
            return console.log(error)
        } else {
            console.log("File generated succesfully");
        }
    })


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
