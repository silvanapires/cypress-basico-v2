Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){ 

    cy.get('#firstName').type('Silvana')
	cy.get('#lastName').type(' Pires da Silva')
	cy.get('#email').type('silvana_piressilva@hotmail.com')
	cy.get('#open-text-area').type('Teste')
	cy.contains('button', 'Enviar').click()
})