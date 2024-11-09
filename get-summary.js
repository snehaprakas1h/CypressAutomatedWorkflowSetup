import fs from 'fs';

const results = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

let summary = "Cypress Test Summary\n\n";

if (results && results.stats && results.stats.tests) {
  summary += `Total Tests: ${results.stats.tests}\n`;
  // ... other summary information (add more details here)
} else {
  summary += "Error: Could not extract test results from mochawesome.json\n";
  // ... perhaps add a message to check the report manually
}

console.log(`::set-output name=cypress-summary::${summary}`);