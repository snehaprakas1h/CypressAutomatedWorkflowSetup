# Nightly Cypress Tests

This project includes automated end-to-end tests using Cypress that run on a nightly schedule. These tests help ensure the continued quality and functionality of the application by catching regressions and errors early.

## How the Nightly Tests Work

The nightly tests are powered by GitHub Actions, a continuous integration and continuous delivery (CI/CD) platform built into GitHub. A YAML file (`.github/workflows/nightly-tests.yml`) defines the workflow that orchestrates the tests.

Here's a breakdown of the process:

1. **Scheduled Trigger:** The workflow is triggered automatically  on sunday at midnight and 1 AM UTC.

2. **Environment Setup:** GitHub Actions sets up a clean virtual machine (Ubuntu) to run the tests.

3. **Code Checkout:** The project's code is checked out from the repository.

4. **Dependencies Installation:**  The necessary dependencies for the project and Cypress are installed.

5. **Server Start (if needed):** If your application requires a server to be running, the workflow starts the server using a command like `npm start`.

6. **Cypress Tests Execution:** The Cypress tests are executed in the Chrome browser.

7. **Test Recording (optional):** If configured, the test results are recorded to the Cypress Dashboard, a service that provides insights into test performance and helps with debugging.

8. **Artifact Collection:**
   - Screenshots are taken automatically on test failures and saved as artifacts.
   - Videos of the test runs are also recorded and saved as artifacts.
   - These artifacts are helpful for debugging and understanding what went wrong in case of test failures.

9. **Email Notifications:** An email notification is sent with a summary of the test results, regardless of whether the tests pass or fail. The email includes a link to the workflow run page on GitHub for detailed logs and artifacts.
Site to test SMTP connection - https://www.gmass.co/smtp-test

## SMTP Setup for Email Notifications

The email notifications rely on an SMTP (Simple Mail Transfer Protocol) server to send emails. Here's how it's set up:

- **SMTP Server:** The workflow uses the Gmail SMTP server (`smtp.gmail.com`) to send emails.
- **Authentication:** To authenticate with the SMTP server, you need to provide your Gmail username (your Gmail address) and an app password.
- **App Password:** Gmail requires you to generate an app password specifically for applications like GitHub Actions. This provides an extra layer of security.
- **GitHub Secrets:** For security reasons, your Gmail username and app password are stored as encrypted secrets in your GitHub repository settings. The workflow file accesses these secrets to authenticate with the SMTP server.

## Understanding the Workflow File

The `.github/workflows/nightly-tests.yml` file defines the steps and configurations for the nightly tests. It uses YAML syntax, which is a human-readable data serialization language.

**Key sections of the workflow file:**

- **`name`:** The name of the workflow.
- **`on`:** The events that trigger the workflow (schedule and manual trigger).
- **`jobs`:** The jobs that the workflow will execute. Each job has a set of steps.
- **`steps`:** The individual actions that are performed within a job (e.g., checkout code, run tests, upload artifacts, send email).
- **`uses`:** Specifies the actions to be used in each step. Actions are reusable units of code that can be shared and reused across workflows.
- **`with`:**  Provides input parameters to the actions.

## Accessing Test Results and Artifacts

- **GitHub Actions:** You can view the details of each workflow run, including logs and artifacts, in the "Actions" tab of your repository.
- **Cypress Dashboard:** If recording is enabled, you can view detailed test results, including videos and logs, in the Cypress Dashboard.
- **Email Notifications:** The email notifications provide a summary of the test run and a link to the workflow run page for more details.

## Contributing and Troubleshooting

- If you need to make changes to the nightly tests or the workflow, create a new branch, test your changes thoroughly, and submit a pull request.
- If you encounter any issues, check the workflow run logs, Cypress Dashboard (if enabled), and email notifications for error messages. Consult the GitHub Actions documentation for troubleshooting tips.

This documentation provides a comprehensive overview of the nightly Cypress tests, SMTP setup, and workflow details. By understanding this process, you can effectively contribute to and maintain the automated testing process for this project.