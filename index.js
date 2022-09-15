// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else  {
                console.log('You must enter a title');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'about',
        message: 'Please provide a description of your project',
        validate: aboutInput => {
            if(aboutInput) {
                return true;
            } else {
                console.log('You must enter a description');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions',
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('You must enter installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('You must enter your usage information');
                return false;
            }
        }
    },
    {
       type: 'list',
       name: 'license',
       choices: ['MIT', 'ISC', 'GNU LGPL', 'Apache', 'BSD', 'Unlicense', 'None'] 
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter your contribution guidelines for this project',
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log('You must enter your contribution guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Input testing instructions for the user',
        validate: testingInput => {
            if(testingInput) {
                return true;
            } else {
                console.log('You must enter testing instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            } else {
                console.log('You must enter your GitHub username');
                return false;
            }
        }
    },
    type: 'input',
    name: 'profile',
    message: 'Enter your GitHub Profile Link',
    validate: profileInput => {
        if(profileInput) {
            return true;
        } else {
            console.log('You must enter your GitHub Profile Link');
            return false;
        }
    },
    type: 'input',
    name: 'email', 
    message: 'What is your email address?',
    validate: emailInput => {
        if(emailInput) {
            return true;
        } else {
            console.log('You must enter your email address');
            return false;
        }
    }
])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('README has been created')
})
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
