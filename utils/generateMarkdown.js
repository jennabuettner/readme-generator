// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Technologies](#technologies)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation 

  ${data.installation}
  
  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions, please contact me at one of the following addresses:

  ${data.questions}
  
  ${data.github}
  `;
}

module.exports = generateMarkdown;
