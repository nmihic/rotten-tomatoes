# Rotten Tomatoes End-to-End Tests

These end-to-end tests serve as smoke tests for the entire application.

## Development Setup

Set up test suite: `yarn install`.

## Run End-to-End Tests

Run tests:

   - default (headless): `yarn test`
   - headed: `yarn test --headed`
   - just one browser: `yarn test --project=chromium`
   - with inspector (debug mode): `yarn start`

## Tracing

Each failed test will produce a trace with screenshots that you can inspect in the [Playwright Trace Viewer][trace-viewer].

Open the trace by navigating to [https://trace.playwright.dev](https://trace.playwright.dev) and loading the zip file of a failed test from the `test-results` folder.

## Codegen

By running `yarn codegen $URL` where you enter a valid URL, Playwright will launch a browser in which you get clues for selectors and suggested test assertions as you navigate around the page behind the URL.

## Best practices

1. Using the Page Object Model (POM) in E2E testing is beneficial because it promotes reusability and maintainability of test code. By abstracting page-specific elements and actions into separate classes, POM makes the test scripts cleaner and easier to manage. When the UI changes, you only need to update the corresponding page objects, rather than modifying multiple test cases. This approach also improves readability by separating test logic from the actual page structure, making tests more reliable and less prone to breaking due to UI changes.

2. Using stable selectors in E2E tests ensures that your tests remain reliable even when the UI undergoes changes, such as style updates or text modifications. By relying on unique element IDs, you reduce the risk of test failures caused by non-essential changes, making the tests more robust and maintainable.

3. Handling flaky tests (tests that fail randomly) can weaken confidence in the test suite. Identify and resolve the root cause of flakiness (e.g., timing issues, asynchronous calls).

4. Each test should run in isolation to avoid interference between tests.