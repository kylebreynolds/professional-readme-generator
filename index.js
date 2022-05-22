// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { Z_ERRNO } = require('zlib');



// TODO: Create an array of questions for user input
const questions = [

    {
        type:'input',
        name:'title',
        message:'What is the title of this application?'
    },
    {
        type:'input',
        name:'description',
        message:'What is the purpose of your application?'
    },
    {
        type:'input',
        name:'instructions',
        message:'How do you install your application?'
    },
    {
        type:'input',
        name:'usage',
        message:'How will your application be used?'
    },
    {
        type:'input',
        name:'contributions',
        message:'Who contributed to this application?'
    },
    {
        type:'input',
        name:'test',
        message:'How do you test this application?'
    },
    {
        type:'list',
        name:'license',
        message:'What type of license are you using?',
        choices: ['MIT', 'Apache', 'BSD']
    }

];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(userInput) {

        const readMe = generateMarkdown(userInput)

        // TODO: Create a function to write README file
        fs.writeFile('README.md', readMe, err => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('README COMPLETE!')
            }
        });

    })
}

// Function call to initialize app
init();
