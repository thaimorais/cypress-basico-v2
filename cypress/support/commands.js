Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Thaísy');
  cy.get('#lastName').type('Morais');
  cy.get('#email').type('thaisy@teste.com');
  cy.get('#open-text-area').type('teste');
  cy.contains('button', 'Enviar').click();
}); 