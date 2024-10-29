Loan Account Test Automation with Cypress
This repository contains automated tests for loan account functionalities using Cypress. The tests utilize a Page Object Model (POM) design pattern for maintainability and reusability.

Project Overview
The automated tests cover the following functionalities:

Logging in to the Mifos community sandbox application.
Creating a loan account.
Approving a loan.
Making loan repayments.
Asserting that details are displayed correctly throughout the process.
Getting Started
Prerequisites
To get started with this project, I ensure that I have the following installed:

Node.js (version 12 or higher)
Cypress (installed via npm)



Installation
Clone the Repository
git clone (https://github.com/OluwaseunAkinbiyi/blusaltassessment)

Navigate to the Project Folder
cd(visual studio code) loan-account-cypress-automation

Install Dependencies:
npm install



Project Structure
The main structure of this project includes:

Page Objects
SinglePageObject.js: Contains the page object methods for interacting with the Mifos application.
page.js: Exports an instance of the PageObject.
Tests

testfile.spec.cy.js: Contains the test cases for loan account functionalities.
Writing and Running Tests
To run the tests in Cypress:

Open the Cypress Test Runner:
npx cypress open

Select and Run the Test:
In the Cypress Test Runner, navigate to testfile.spec.cy.js and click on it to execute the tests.
Test Script Example
Here’s an example of how the tests are structured in testfile.spec.cy.js:
javascript
import { page } from "./PageObjects/page";

describe('Loan Account Tests', () => {
    it('should log in and create a loan account successfully', () => {
        // Visit and login
        page.navigate(); // Navigate to the application
        cy.window().its('document.readyState').should('eq', 'complete'); // Ensure the document is fully loaded
        page.fillUsername('mifos'); // Fill in the username
        page.fillPassword('password'); // Fill in the password
        page.submit(); // Submit the login form
        page.acceptDialog(); // Accept any dialogs that appear

        // Create loan account
        page.openTab(); // Open the loan account tab
        page.navigateToClients(); // Navigate to the clients section
        page.createLoanAccount(); // Create a loan account
        page.assertLoanDetails(); // Assert loan details are displayed

        // Approve loan
        page.approveLoan(); // Approve the loan

        // Loan repayment
        page.makeLoanRepayment(); // Make a loan repayment
        page.assertRepaymentDetails(); // Assert repayment details are displayed
    });
});



Notes
Observations
I should ensure that the Mifos community sandbox application is accessible and responsive while running tests.
Test data used for logging in and other actions must be valid and up-to-date.
Blockers
If the application is down or has connectivity issues, tests will fail.
If the date picker takes too long to load, I may need to adjust the Cypress timeout settings or block unnecessary resources as needed.
Troubleshooting
Input Field Issues: I should ensure that the selectors in SinglePageObject.js match the current application’s HTML structure.
Timeouts: If elements take longer to appear, I might consider increasing the timeout values in the Cypress configuration.
