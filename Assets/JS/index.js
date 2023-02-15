// TODO: Include packages needed for this application
const Inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide a step by step explanation of how to install your project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples on how to use your application',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List collaborators and sources that assisted you in building your application',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'What license does your project use?',
        choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Provide a list of features of your project',
        name: 'features',
    },
    {
        type: 'input',
        message: 'If you would like other developers to contribute to your project, provide some guidelines for them to follow',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'If you have written tests for you application, provide examples of how to run them here',
        name: 'tests',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
