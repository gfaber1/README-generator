//Included packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');

var MIT = 'MIT'
var GPLv2 = 'GPLv2'
var Apache = 'Apache 2.0'
var other = 'Other'
// Created an array of questions for user input through inquirer prompts
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
            choices: [MIT, GPLv2, Apache, other],
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
        email,
    }) => {
        // the license buttons are created depending on which license was selected
        if (license === MIT) {
            license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        } else if (license === GPLv2) {
            license = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
        } else if (license === Apache) {
            license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        } else if (license === other) {
            license = 'go here to find the correct markdown button for you license: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba'
        }
        // markdown template
        const template = `
# ${title}

${license}
        
## Description
${description}
## Table of Contents 
*[Installation](#installation)
*[Usage](#usage)
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
        createNewFile(title, template)
    })

// Created a function to creat and write to a README file
function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your professional README has been generated!')
    })
}