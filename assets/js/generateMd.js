
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseBadge = license
    if (licenseBadge) {
      return `![License Badge](https://img.shields.io/badge/License-${licenseBadge}-success)`
    } else {
      return ''
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    
    const licenseLink = license
  
    if (licenseLink === 'MIT') {
      return `[MIT License](https://www.mit.edu/~amini/LICENSE.md)`
    }
    if (licenseLink === 'Apache_2') {
      return `[Apache 2 License](https://www.apache.org/licenses/LICENSE-2.0.txt)`
    }
    if (licenseLink === 'GNU_GPL_3') {
      return `[GNU_GPL_3 License](https://www.gnu.org/licenses/gpl-3.0.txt)`
    }
    else {
      return ``
    }
  
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
  
    if(license === 'None'){
      return 'N/A';
  
    } else {
  
    return `
    ## <a name="license"></a>License
    This repo is licensed under the ${license} license.
    ${renderLicenseLink(license)}`
    }
  }



const generateMD = function(data) {
    return `

    # ${data.title}
    https://github.com/${data.github}/${data.title}
    # Description
    ${data.description}
    # Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contribution)
    * [Tests](#testing)
    # Installation
    The following dependencies are necessary to run the application correctly.
    # Usage
    The following outlines any usage instructions or commands necessary.
    # License
    This project is licensed under the ${data.license} license.
    ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
    # Contributions
    ${data.contribution}
    # Test
    The following should be done to complete a test of the application: ${data.testing}
    # Contact Me
    If you have any questions about this repository or application, feel free to contact me at:
    ${data.email}
    ${data.github}
    
    `
}

module.exports = generateMD;
