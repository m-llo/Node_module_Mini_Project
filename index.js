// Define the requirements
const fs = require('fs')
const inquirer = require('inquirer')

//Define the template
const template = ``


//Inquirer prompts for name,location, bio, linkedIN, github

inquirer
.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        message: 'What is your location?',
        name: 'location',

      },
      {
        type: 'input',
        message: 'What is your favorite food?',
        name: 'favfood',
      },
      {
        type: 'input',
        message: 'Input your LinkedIn URL',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'Input your GitHub URL',
        name: 'github',
      },
])
// .then ((response) => {

// })