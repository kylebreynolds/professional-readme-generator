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
  return `# ${data.title}

  ## Description {#description}
  ${data.description}

  ## Table of Contents
    - [Description](#description)
    [Installation Instructions](#installation-instructions)
    [Usage Information](#usage)
    [License](#license)
    [Contribution Guidelines](#contributions)
    [Test Instructions](#test)
    [Questions](#contactQuestions)

  ## Installation Instructions
  ${data.instructions}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contributions}

  ## Test Instructions
  ${data.test}

  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;
