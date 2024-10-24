describe('Prueba E2E de React App', () => {
  it('Carga la página principal y realiza una acción', () => {
    // Visita la página de la aplicación
    cy.visit('http://localhost:3000/'); // Cambia la URL según la de tu aplicación
    cy.wait(5000);
    // Añadir la searchbox
    cy.get('input').type('pikachu');
    cy.wait(10000);
    // Verificar que la tarjeta contiene 'Pikachu'
    cy.get('span.name')
      .should('contain', 'Pikachu');
  });
});
