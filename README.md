# Rotten Tomatoes End-to-End Tests

These end-to-end tests serve as smoke tests for the entire application.

## Why this project

I built this as a personal sandbox to practise test automation and to show how I approach it. Some patterns come from my work on commercial projects; others I researched and tried out here for the first time. The goal isn't to fully test Rotten Tomatoes, but to have a small, real-world project where I can experiment and learn.

## Decisions and why

- **Rotten Tomatoes as the target.** It's a real production site with stable, well-structured locators. On most projects good locators are something the team adds deliberately, so I chose a site where I could focus on test design instead of fighting poor selectors.
- **Playwright + TypeScript.** It's the stack I used at work. I've also worked with Cypress, but I prefer Playwright — the API, tooling and community — so I kept building on it.
- **Page Object Model.** Carried over from work: page-specific locators and actions live in `page-objects/`, and tests only describe behaviour.
- **Custom fixtures** (`utils/fixtures.ts`). Something I explored on my own and the biggest discovery of the project: page objects are injected into tests as fixtures, so tests don't need any setup boilerplate.
- **Cookie consent handled once, in global setup.** `utils/global-setup.ts` accepts the consent banner once and saves the browser state to `tests/state.json`, which every test reuses. That's faster and simpler than clicking the banner in each test.
- **Chromium only.** A deliberate trade-off for simplicity. Chrome is the most widely used browser, and the goal here is learning, not full cross-browser coverage. Firefox and WebKit are ready to enable in `playwright.config.ts`.
- **CI with GitHub Actions**, set up by me: tests run on every push and pull request, and the HTML report is uploaded as an artifact.

## Lessons from maintaining it against a live site

Testing a site you don't control means it changes under you:

- **Locator drift.** Rotten Tomatoes changed its markup over time, so I had to update locators to keep tests stable.
- **An app promo modal blocking clicks.** A modal appeared asynchronously after page load and intercepted clicks, and its dismissed state wasn't persisted in the saved storage state, so it could come back on every navigation. It also had two dismiss buttons, one of which wasn't visible in CI. With the Trace Viewer (which I use for every failure) I tracked it down and fixed it: the modal is now dismissed via the visible close button, both in global setup and in `Navigation`, with a short timeout so it doesn't block tests when it isn't shown.

## What I'd add next

- **API tests**, probably first.
- A fuller **sanity suite** covering the flows I actually use as a Rotten Tomatoes user.

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