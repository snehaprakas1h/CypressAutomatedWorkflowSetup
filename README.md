# Cypress Automated Workflow Setup

This project is a Cypress Automated Workflow setup used for end-to-end testing. It leverages Cypress for automation and integrates with GitHub Actions for CI/CD.

## 📌 Overview

This project is a **Cypress Automated Workflow** setup used for end-to-end testing. It leverages **Cypress** for automation and integrates with **GitHub Actions** for CI/CD.

## 🏗️ Project Structure

```
CypressAutomatedWorkflow/
├── cypress/
│   ├── e2e/                # Test specifications
│   ├── fixtures/           # Test data (JSON files)
│   ├── support/            # Custom commands and test setup
├── cypress.config.ts       # Cypress configuration file
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── .github/workflows/      # CI/CD automation workflows
├── docs/                   # Documentation and workflow images
└── assets/                 # Additional images and assets
```

## ⚙️ Setup & Installation

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn installed

### Installation Steps

1. **Clone the Repository**
   ```sh
   git clone https://github.com/snehaprakas1h/CypressAutomatedWorkflowSetup.git 
   cd CypressAutomatedWorkflow
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```

## 🚀 Running Tests

### Run Cypress Test Runner (GUI)
```sh
npx cypress open
```

### Run Tests in Headless Mode
```sh
npx cypress run
```

## 📝 Writing Tests

Tests are written in Cypress inside `.spec.js` files. Example:

```js
describe('Login Test', () => {
  it('Logs in with valid credentials', () => {
    cy.visit('/login');
    cy.get('#username').type('testuser');
    cy.get('#password').type('password123');
    cy.get('#loginButton').click();
    cy.url().should('include', '/dashboard');
  });
});
```

## 📌 GitHub Actions Integration

This project uses **GitHub Actions** to automate various tasks, including:

- **Nightly Cypress tests**: These tests run every Sunday at 1:00 AM UTC to check for regressions and ensure the quality of the application.

For detailed information about the workflows, see [Workflows Documentation](./docs/workflows.md).

## 🤝 Contributing

We welcome contributions to this project! If you'd like to contribute, please follow our [Commit Message Guidelines](./docs/commit-guidelines.md) to ensure consistency and clarity in our commit history.

## 📧 Contact

For any issues or improvements, please raise an issue or contribute to the repository.


