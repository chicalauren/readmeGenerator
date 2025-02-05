// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license === 'None' ? '' : `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license === 'None' ? '' : `- [License](#license)`;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license === 'None' ? '' : `## License`
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  `;
}

export default generateMarkdown;
