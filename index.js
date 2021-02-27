const fs = require('fs');
const inquirer = require('inquirer');


















const filename = `${$response.name.toLowerCase().split(" ").join("_")}.html`;




fs.appendFile(filename, JSON.stringify(template), jSON.stringify(data), (err) =>
  
err ? console.error(err) : console.log('User logged!')
);


