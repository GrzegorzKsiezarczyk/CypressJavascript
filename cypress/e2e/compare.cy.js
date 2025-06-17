import { ShopPage } from "../pages/ShopPage";
import { ProductPage } from "../pages/ProductPage";

describe("Add product to compare", () => {
  const shop = new ShopPage();
  const product = new ProductPage();

  it("add product to compare and check message", () => {
    cy.visit("/index.php?route=product/category&path=20");
    cy.scrollTo(0, "50%");
    shop.goToProductCartPage();
    product.clickCompare();
    shop.checkCompareMessage();
  });
});
