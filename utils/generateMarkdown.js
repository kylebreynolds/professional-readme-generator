

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-orange)
  

  ## Description
  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage Information](#usage-information)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [License](#license)
  * [Questions](#questions)

  ## Installation Instructions
  ${data.instructions}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contributions}

  ## Test Instructions
  ${data.test}

  ## License
  NOTICE! This application is covered under ${data.license} license.

  ## Questions
  GitHub Profile: <a href='https://github.com/${data.github}'>${data.github}</a><br>
  If you have any additional questions, email me at: <a href='mailto:${data.email}'>${data.email}</a>
`;
}

module.exports = generateMarkdown;
