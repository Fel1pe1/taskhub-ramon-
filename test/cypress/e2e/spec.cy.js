describe('template spec', () => {
  it('passes', () => {

    cy.visit('http://localhost:5173');
    cy.contains('Sign In').click();
    cy.url().should('include', '/signin');
    cy.get('#email').type('felipeteeste@gmail.com'); 
    cy.get('#password').type('1234');
    cy.get('[data-cy=botao-login]').click();

    cy.get('[data-cy=botao-projetos]').click();
    cy.contains('Create Project').click();
    cy.get('#name').type('Teste da lenda');
    cy.get('#description').type('é sobre isso e ta tudo certo');
    cy.get('#owner').select('felipe');
   
    cy.get('#react-select-2-input').click().type('felipe{enter}');
    cy.get('#react-select-3-input').click().type('felipe{enter}');
    cy.get('button[type="submit"]').contains('Create Project').click()



  });
});
