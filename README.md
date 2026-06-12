# QA Playwright Advanced Training - Part 2

# Project Overview

The project contains advanced Playwright automation scenaros implemented using TyperScript.The objective of this assignment is to explore browser window handling and network interception techniques that are commonly used in real world automation frameworks.

# Technologies Used 
- Playwright
- TypeScript
- Node.js
- Git and GitHub

# Project Structure

playwright-advanced-training/
|
|--- DebuggingDocs/
|    |--debugging-report.md
|
|--- fixtures/
|    |--customFixtures.ts
|
|--- HTMLReportScreenshots
|    |--Day1
|    |--Day2
|
|--- pages/
|    |--BrowserWindowPage.ts
|    |--BookStorePage.ts
|
|--- tests/ 
|    |--browserWindows.spec.ts
|    |--networkMock.spec.ts
|
|--- test-data/
|    |--mockBook.ts
|
|--- TraceViewerDocs/
|    |--trace-viewer.md
|
|---utils/
|   |--Logger.ts
|
|--- playwright.config.ts
|--- package.json
|--- package-lock.json
|--- README.md

# Setup Instructions

1. Clone Repository
   
   git clone https://github.com/ParthDalviZeusLearning/playwright-advanced-training

2. Install Dependencies
  
  npm install

3. Install Playwright Browsers
 
  npm playwright install

# Test Execution

- Run all tests
  
  npx playwright test

- Run Browser Windows Tests 
 
  npx playwright test tests/browserWindows.spec.ts

- Run Network Mock Tests

  npx playwright test tests/networkMock.spec.ts

- Run tests in Headed Mode
  
  npx playwright test --headed

# Test Coverage

- Browser Windows

  - TC_001 Verify New Tab button opens a new tab. 
  - TC_002 Verify content of newly opened tab ("This is a sample page"). 
  - TC_003 Close child tab and switch back to parent. 
  - TC_004 Verify New Window Message functionality. 

- Network Mocking 
  
  - TC_005 Mock Books API with custom data
  - TC_006 Mock Empty API response
  - TC_007 Mock Delayed API response

# Fixtures

- Implemented Page Object fixtures for BrowserWindowPage and BookStorePage
- Implemented Logger utility fixture

# Reports and Debugging

- Generated Playwright HTML reports
- Used Trace Viewer for execution analysis
- Documented 5 failure categories and 3 timeout categories







