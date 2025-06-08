describe('Tests API', () => {
  it('check 200', () => {
    cy.request({
      url: '/',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('check 404', () => {
    cy.request({
      url: '/index.php?route=non-existent-endpoint-xyz123',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('check 401 or 403', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpstat.us/401', // simulates a 401 Unauthorized response
      failOnStatusCode: false
    }).then((response) => {
      expect([401, 403]).to.include(response.status);
    });
  });
});