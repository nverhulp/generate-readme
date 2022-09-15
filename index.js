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
        
    }
])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
