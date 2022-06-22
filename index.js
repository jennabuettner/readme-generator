// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const techArray = [
  "HTML",
  "CSS",
  "JavaScript",
  "JQuery",
  "Bootstrap",
  "Moment.js",
  "React.js",
  "node.js",
];

const licenseArray = ["MIT", "APACHE"];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a brief description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the instructions for installation?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage of this application?",
      name: "usage",
    },
    {
      type: "list",
      message: "Please select a license.",
      name: "license",
      choices: licenseArray,
    },
    {
      type: "checkbox",
      message: "What technologies were used for this application?",
      name: "technologies",
      choices: techArray,
    },
    {
      type: "input",
      message: "How can people contribute to this project?",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "Please provide tests for your project and describe how to use them.",
      name: "tests",
    },
    {
      type: "input",
      message: "Please enter your email to receive user questions.",
      name: "questions",
    },
    {
      type: "input",
      message: "Please provide your GitHub username for user questions.",
      name: "github",
    },
  ])
  .then((data) =>
    fs.writeFile("README.md", generateMarkdown(data), (err) => {
      console.log(err);
    })
  );
