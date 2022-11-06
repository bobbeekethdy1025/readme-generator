// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    "Please eneter the title of your project.",
    "Please write a brief description of your project.",
    "What installations are there for your project?",
    "Please enter any usage instructions for your project.",
    "Which license does your project use?",
    "Please enter the contribution guidelines for your project.",
    "What test instructions does your project have?",
    "Please enter your GitHub username.",
    "Please enter your email.",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log("Success!");
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: `${questions[0]}`,
                name: "title",
            },
            {
                type: "input",
                message: `${questions[1]}`,
                name: "description",
            },
            {
                type: "input",
                message: `${questions[2]}`,
                name: "installation",
            },
            {
                type: "input",
                message: `${questions[3]}`,
                name: "usage",
            },
            {
                type: "list",
                message: `${questions[4]}`,
                choices: [
                    "GNU AGPLv3",
                    "GNU GPLv3",
                    "GNU LGPLv3",
                    "Mozilla Public License 2.0",
                    "Apache License 2.0",
                    "MIT License",
                    "Boost Software License 1.0",
                    "Unlicense",
                ],
                default: "Unlicense",
                name: "license",
            },
            {
                type: "input",
                message: `${questions[5]}`,
                name: "contribution",
            },
            {
                type: "input",
                message: `${questions[6]}`,
                name: "tests",
            },
            {
                type: "input",
                message: `${questions[7]}`,
                name: "githubProfile",
            },
            {
                type: "input",
                message: `${questions[8]}`,
                name: "email",
            },
        ])
            .then((response) => {
                writeToFile("README.md", response);
            });

};
// Function call to initialize app
init();
