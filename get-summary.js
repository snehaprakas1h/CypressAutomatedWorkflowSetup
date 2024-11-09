import fs from 'fs';

const results = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

let summary = "Cypress Test Summary\n\n";

if (results && results.stats && results.stats.tests) {
  summary += `Total Tests: ${results.stats.tests}\n`;
  summary += `Passes: ${results.stats.passes}\n`;
  summary += `Failures: ${results.stats.failures}\n`;
  summary += `Pending: ${results.stats.pending}\n`;
  summary += `Duration: ${results.stats.duration}ms\n`;
  // ... add more details as needed
} else {
  summary += "Error: Could not extract test results from mochawesome.json\n";
}

try {
  // Use absolute path to ensure correct location
  fs.writeFileSync('/home/runner/work/Herokuapp-Cypress-automation1/Herokuapp-Cypress-automation1/cypress_summary.env', `CYPRESS_SUMMARY=${summary}`); 

  // Read the file back to verify content
  const fileContent = fs.readFileSync('/home/runner/work/Herokuapp-Cypress-automation1/Herokuapp-Cypress-automation1/cypress_summary.env', 'utf-8');
  console.log("File content:", fileContent); 
} catch (error) {
  console.error("Error writing or reading summary file:", error);
}