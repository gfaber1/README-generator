// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { default: inquirer } = require('inquirer');
const { title } = require('process');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
        },
        {
            type: 'input',
            message: 'Enter your GitHub Username',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your LinkedIn URL.',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'provide an email that you can be reached at if anyone has questions regarding the project',
            name: 'email',
        },
    ])
    .then(({
        title,
        description,
        installation,
        usage,
        credits,
        license,
        features,
        contribute,
        tests,
        github,
        linkedin,
        email
    }) => {
        const template = `# ${title}
        
        ## Description
        ${description}
        ## Table of Contents 
        *[Installation](#installation)
        *Usage](#usage)
        *[Credits](#credits)
        *[License](#license)

        ## Installation
        ${installation}
        ## Usage
        ${usage}
        ## Credits
        ${credits}
        ## License
        ${license}
        ## Features
        ${features}
        ## How to Contribute
        ${contribute}
        ## Tests
        ${tests}

        ## Contact

        * Linkedin: ${linkedin}
        * Github: ${github}
        * Email: ${email}
        `;
        writeToFile(title, template)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, template) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your professional README has been generated!')
    })
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
