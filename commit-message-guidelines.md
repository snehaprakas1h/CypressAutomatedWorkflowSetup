# Commit Message Guidelines

This document outlines the guidelines for writing clear, consistent, and informative commit messages for this project.

## Format

We follow the conventional commit message format:
<type>(<scope>): <subject>
<body>
<footer>

### Type

### Type

The type indicates the nature of the change.
Here are the types we use with examples:

* **feat:** A new feature.
    * `feat(search): Add advanced search filters`
    * `feat(profile): Implement user profile editing` 

* **fix:** A bug fix.
    * `fix(auth): Correct login issue for certain browsers`
    * `fix(api): Prevent duplicate entries in database`

* **docs:** Changes to documentation.
    * `docs(readme): Update project description`
    * `docs(contributing): Add guidelines for contributors`

* **style:** Code formatting changes (no logic changes).
    * `style(ui): Apply consistent indentation`
    * `style(backend): Enforce code style with linter`

* **refactor:** Code restructuring (no functionality changes).
    * `refactor(api): Simplify data processing logic`
    * `refactor(auth): Improve code organization for clarity`

* **test:** Adding or modifying tests.
    * `test(auth): Add unit tests for login component`
    * `test(api): Increase test coverage for user endpoints`

* **chore:** Build process or auxiliary tool changes.
    * `chore(deps): Update project dependencies`
    * `chore(build): Improve build process efficiency`

* **perf:** Performance improvements.
    * `perf(api): Optimize database queries for faster response`
    * `perf(ui): Reduce page load time by optimizing images`

* **ci:** Changes to CI/CD configuration files and scripts.
    * `ci(workflows): Add automated deployment to staging`
    * `ci(tests): Improve test execution speed in CI`

* **revert:** Reverting a previous commit.
    * `revert: Revert "[feat] Add new payment gateway" - This reverts commit <hash>`


### Scope (optional)

The scope specifies the part of the codebase affected (e.g., `auth`, `api`, `ui`).

### Subject

* A concise summary of the change (50 characters or less).
* Use imperative mood (e.g., "Fix bug" instead of "Fixed bug").

### Body (optional)

* More detailed explanation of the change.
* Keep it concise and focused.

### Footer (optional)

* Breaking changes: `BREAKING CHANGE: <description>`
* Issue references: `Fixes #123`, `Closes #456`