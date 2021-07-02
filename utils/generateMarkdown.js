// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
- [Contribution](#contribution)
- [Tests](#test)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contribute}
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

${data.choices.value}

## Contributing

${data.contribute}

## Tests

${data.tests}

## Questions

If you have any questions you can find me on Git hub at ${data.github}

You can also email me at ${data.email}
`;
  
}
};


module.exports ={
 generateMarkdown,
}  
