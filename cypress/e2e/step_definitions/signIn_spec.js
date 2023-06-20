import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given(/^open the ([^"]*) page$/, (page) => {
  cy.visit('/');
  cy.title().should('include', page);
});

When(/^click on sign in button$/, () => {
  cy.get('#nav-signin-tooltip').find('span').should('be.visible').click({ force: true });
  cy.url().should('include', '/signin');
});

Given(/^click on continue button$/, () => {
  cy.get('#continue').should('be.visible').click();
});

Then(/^The alert message should be given to user as ([^"]*)$/, (message) => {
  cy.get('#auth-email-missing-alert')
    .find('.a-alert-content')
    .should('be.visible')
    .and(($el) => expect($el.text().trim()).to.equal(message));
});

Given(/^type any email address$/, () => {
  // const emailAddress = faker.internet.email().toLowerCase();
  // cy.setEmailAddress(emailAddress);
});

Then(/^The error message should be given to user as ([^"]*)$/, (message) => {
  cy.get('#auth-error-message-box')
    .find('.a-list-item')
    .should('be.visible')
    .and(($el) => expect($el.text().trim()).to.equal(message));
});
