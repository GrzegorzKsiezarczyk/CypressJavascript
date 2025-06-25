import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  patchProduct,
  deleteProduct,
} from "../../support/api/products";

describe("DummyJSON /products API", () => {
  it("GET /products - should return all products", () => {
    getAllProducts().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.products).to.be.an("array");
    });
  });

  it("GET /products/1 - should return a single product", () => {
    getProductById(10).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 10);
    });
  });

  it("POST /products/add - should add a new product", () => {
    const newProduct = { title: "Test Product", price: 299 };
    addProduct(newProduct).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("title", "Test Product");
    });
  });

  it("PUT /products/1 - should update the product", () => {
    const updatedData = { title: "Updated Product Title" };
    updateProduct(10, updatedData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("title", "Updated Product Title");
    });
  });

  it("PATCH /products/1 - should partially update the product", () => {
    const patchData = { price: 123 };
    patchProduct(10, patchData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("price", 123);
    });
  });

  it("DELETE /products/1 - should delete the product", () => {
    deleteProduct(10).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 10);
    });
  });

  it("GET /products/123456789 - should return 404 for non-existing product", () => {
    getProductById(123456789, true).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
