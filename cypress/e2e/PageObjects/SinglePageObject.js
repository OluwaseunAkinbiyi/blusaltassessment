import { page } from "./page";

export class PageObject {
    
    
    navigate() {
        cy.visit('https://sandbox.mifos.community'); 
    }

    // Login Methods
    fillUsername(username) {
        cy.get('#mat-input-0').type(username); 
    }

    fillPassword(password) {
        cy.get('#mat-input-1').type(password); 
    }

    submit() {
        cy.get('.mat-raised-button').click(); 
    }

    acceptDialog() {
        cy.get('.mat-dialog-actions > .mat-focus-indicator').click(); // Accept dialog if it appears
    }

    // Loan Account Methods
    openTab() {
        cy.get('#mat-tab-link-0').click(); // Open the loan account tab
    }

    navigateToClients() {
        cy.get('[routerlink="/clients"]').click(); // Navigate to clients section
    }

    selectClient() {
        cy.get(':nth-child(3) > .cdk-column-displayName').click();
        cy.wait(5000) // Select a client from the list
    }

    createLoanAccount() {
        cy.get(':nth-child(3) > .cdk-column-displayName').click();
        cy.get('.mat-card-title > div').click(); // Click on the loan account creation button
        cy.get('.mat-menu-trigger.ng-star-inserted').click(); // Click to open the menu
        cy.get('#mat-menu-panel-18 > .mat-menu-content > :nth-child(1)').click(); // Choose option from menu
        cy.get('#mat-select-14 > .mat-select-trigger > .mat-select-arrow-wrapper').scrollIntoView().click(); // Select loan type
        cy.get('#mat-option-65 > .mat-option-text').click(); // Choose loan type option
        cy.get('#mat-input-18').click(); // Click for input
        cy.get('#mat-datepicker-3').contains('28').click(); // Select date
        cy.wait(9000)
        cy.get('form.ng-dirty > .margin-t > .mat-stepper-next').scrollIntoView().click(); // Move to next step
        
        cy.wait(5000)
        cy.get('form.ng-untouched > .margin-t > .mat-stepper-next').scrollIntoView() // Move to next step
        cy.get('form.ng-untouched > .margin-t > .mat-stepper-next').click()
        cy.get('mifosx-loans-account-charges-step.ng-star-inserted > .margin-t > .mat-stepper-next').click(); // Charges step
        cy.get('mifosx-loans-account-schedule-step.ng-star-inserted > .margin-t > .mat-stepper-next').click(); // Schedule step
        cy.get('.margin-t > .mat-primary').click(); // Submit loan creation
    }

    assertLoanDetails() {
        cy.get('.tab-container > :nth-child(1) > h3').should('contain', 'Loan Details'); // Assert loan details are displayed
    }

    approveLoan() {
        cy.get(':nth-child(2) > .breadcrumb-link > .ng-star-inserted').click(); // Click on loan approval link
        this.selectClient(); // Reuse selectClient method
        cy.get(':nth-child(6) > .cdk-column-Actions > span.ng-star-inserted > .mat-focus-indicator').scrollIntoView().click(); // Approve loan button
        cy.get('.mat-card-actions > .mat-primary').click(); // Confirm approval
    }

    makeLoanRepayment() {
        cy.get(':nth-child(2) > .breadcrumb-link > .ng-star-inserted').scrollIntoView().click(); // Navigate to repayments
        this.selectClient(); // Reuse selectClient method
        cy.get(':nth-child(1) > .cdk-column-Actions > .mat-focus-indicator').scrollIntoView().click(); // Select repayment action
        cy.get('.mat-card-actions > .mat-primary').click(); // Confirm repayment
    }

    assertRepaymentDetails() {
        cy.get(':nth-child(10) > .cdk-column-date').scrollIntoView(); // Assert repayment details are displayed
    }
}

export default page;
