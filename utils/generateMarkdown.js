// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if(license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "Unlicensed"){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }else if(license === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 if (data.tableOfContents) 
 {return `
 # ${data.title}

  ## Description

  ${data.description}
  
  ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contribute}

## Tests

${data.tests}

## Questions

If you have any questions you can find me on Git hub at [${data.github}](https://github.com/${data.github})

You can also email me at ${data.email}
`;
  
} else {
  return `
# ${data.title}

## Description

  ${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contribute}

## Tests

${data.tests}

## Questions

If you have any questions you can find me on Git hub at [${data.github}](https://github.com/${data.github})

You can also email me at ${data.email}
`;
  
}
};


module.exports = {
  generateMarkdown,
  renderLicenseBadge
}
 
