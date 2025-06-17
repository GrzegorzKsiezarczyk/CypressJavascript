export class ProductPage {
  visit() {
    cy.visit("/");
    cy.contains('Apple Cinema 30"').click();
  }
  assertStockAndPriceVisible() {
    cy.get('[data-id="216816"]').should("contain.text", 'Apple Cinema 30"');
    cy.get('[data-update="price"]').should("be.visible");
    cy.get(".ls-label").should("contain.text", "Availability:");
    cy.get(".badge.badge-success").should("contain.text", "In Stock");
  }
  selectSize() {
    cy.get('select[name="option[231]"]').eq(0).select("34");
  }
  clickAddToCart() {
    cy.get('button[title="Add to Cart"]').eq(1).click({ multiple: true });
  }
  assertSuccessMessage() {
    cy.get(".d-flex.mb-3.align-items-start", { timeout: 5000 })
      .scrollIntoView()
      .should("be.visible")
      .should("contain.text", "Success: You have added ");
  }
  clickCompare() {
    cy.contains("button", "Compare this Product").click();
  }
  clickBuyNow() {
    cy.get('button[title="Buy now"]').click();
  }
  assertOnCheckoutPage() {
    cy.url().should("include", "checkout");
  }
  openAskQuestionForm() {
    cy.get('a[aria-label="Ask Question"]').click();
  }
  fillAskQuestionForm(name, email, subject, message) {
    cy.get('input[aria-label="Your name"]').type(name);
    cy.get('input[aria-label="Your email"]').type(email);
    cy.get('input[aria-label="Subject"]').type(subject);
    cy.get('textarea[aria-label="Message"]').click().type(message);
  }
  assertQuestionFormResponse() {
    cy.contains("button", "Send message")
      .should("have.attr", "data-loading", "Loading...")
      .click();
    cy.contains("Your enquiry has been successfully sent to the store owner! ");
  }
  checkRatingsVisible() {
    cy.get('[data-id="216860"]').should("exist");
    cy.get('[aria-label="Your Name"]').should("exist");
    cy.get('[aria-label="Your Review"]').should("exist");
  }
  openSizeChart() {
    cy.get('[aria-label="Size chart"]').click();
    cy.get('[data-id="216865"]').should("be.visible");
  }
  openTab(tabName) {
    cy.get(".nav-tabs").contains(tabName).click({ force: true });
  }
  clickFirstThumbnail() {
    cy.get(".thumbnails img").first().click();
  }
  assertImagePopupVisible() {
    cy.get(".mfp-img").should("be.visible");
  }
}
