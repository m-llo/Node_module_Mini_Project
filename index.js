// Define the requirements
const fs = require('fs')
const inquirer = require('inquirer')

//Define the template
const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node Mini Project</title>
</head>
<body>
    <h1 class="name">Name: ${response.name}</h1>
    <h1 class="location">Location: ${response.location}</h1>
    <h1 class="favFood">Favorite Food: ${response.favfood}</h1>
    <br>
    <h1>Links:</h1>
    <a href="${response.linkedin}" class="linkedin">LinkedIn</a>
    <br>
    <a href="${response.github}" class="github">GitHub</a>

    <script src="index.js"></script>
</body>
</html>
`


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