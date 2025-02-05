// Packages needed for this application
import inquirer from 'inquirer';

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
    ];

//  Function to write README file
function writeToFile(fileName, data) {
  `
# ${data.projectName}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.test}

## License
This project is licensed under the ${data.license} license.

## Questions
If you have any questions, please reach out to me at [${data.email}](mailto:${data.email}).
You can also find more of my work at [${data.github}](https://github.com/${data.github}).
  `;  
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
