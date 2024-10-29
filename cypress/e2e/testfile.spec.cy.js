import { page } from "./PageObjects/page";
describe('Loan Account Tests', () => {
    it('should log in and create a loan account successfully', () => {
        // Visit and login
        page.navigate(); // Use the navigate method
        cy.window().its('document.readyState').should('eq', 'complete');
        page.fillUsername('mifos'); // Use the page object methods
        page.fillPassword('password');
        page.submit();
        page.acceptDialog();

        // Create loan account
        page.openTab();
        page.navigateToClients();
        page.createLoanAccount();
        page.assertLoanDetails();

        // Approve loan
        page.approveLoan();

        // Loan repayment
        page.makeLoanRepayment();
        page.assertRepaymentDetails();
    });
});
