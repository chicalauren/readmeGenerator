// Packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate(val) {
            return val.trim().length > 0 ? true : 'Please enter a project name.';
          },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project: \n- What was your motivation?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn?\n',
        validate(val) { 
            return val.trim().length > 0 ? true : 'Please enter a project description.';
          }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?\nWhat are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n',
        validate(val) {
            return val.trim().length > 0 ? true : 'Please enter installation instructions.';
          }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
        validate(val) { 
            return val.trim().length > 0 ? true : 'Please enter usage information.';
          }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
        validate(val) {
            return val.trim().length > 0 ? true : 'Please choose a license.';
          }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
        validate(val) {
            return val.trim().length > 0 ? true : 'Please enter contribution guidelines.';
          }
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate(val) {
            return val.trim().length > 0 ? true : 'Please enter test instructions.';
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate(val) {
            return val.trim().length > 0 ? true : 'Please enter your email address.';
          }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate(val) {
            return val.trim().length > 0 ? true : 'Please enter your GitHub username.';
          }
      },
    ];

//  Function to write README file
function writeToFile(fileName, data) {
  const readmeContent = `
# ${data.projectName}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.test}

## License
This project is licensed under the ${data.license} license - see LICENSE.md file for details.

## Questions
If you have any questions, please reach out to me at [${data.email}](mailto:${data.email}).
You can also find more of my work at [${data.github}](https://github.com/${data.github}).
  `;  
  fs.writeFileSync(fileName, readmeContent);
    console.log('README.md file created successfully!');
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      writeToFile('README.md', data);
    });
}
// Function call to initialize app
init();
