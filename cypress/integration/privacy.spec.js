it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
  cy.visit('./src/privacy.html')
    .contains('CAC TAT - Política de privacidade').should('be.visible');
});