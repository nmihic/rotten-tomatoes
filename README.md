# Rotten Tomatoes End-to-End Tests

These end-to-end tests serve as smoke tests for the entire application.

## Development Setup

Set up test suite: `yarn install`.

## Run End-to-End Tests

1. Run tests:

   - default (headless): `yarn test`
   - headed: `yarn test --headed`
   - just one browser: `yarn test --project=chromium`
   - with inspector (debug mode): `yarn start`

## Tracing

Each failed test will produce a trace with screenshots that you can inspect in the [Playwright Trace Viewer][trace-viewer].

Open the trace by navigating to [https://trace.playwright.dev](https://trace.playwright.dev) and loading the zip file of a failed test from the `test-results` folder.

## Codegen

By running `yarn codegen $URL` where you enter a valid URL, Playwright will launch a browser in which you get clues for selectors and suggested test assertions as you navigate around the page behind the URL.

