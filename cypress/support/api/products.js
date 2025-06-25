const baseUrl = "https://dummyjson.com";

export const getAllProducts = () => {
  return cy.request(`${baseUrl}/products`);
};

export const getProductById = (id, allowFail = false) => {
  return cy.request({
    url: `${baseUrl}/products/${id}`,
    failOnStatusCode: !allowFail,
  });
};

export const addProduct = (product) => {
  return cy.request("POST", `${baseUrl}/products/add`, product);
};

export const updateProduct = (id, data) => {
  return cy.request("PUT", `${baseUrl}/products/${id}`, data);
};

export const patchProduct = (id, data) => {
  return cy.request("PATCH", `${baseUrl}/products/${id}`, data);
};

export const deleteProduct = (id) => {
  return cy.request("DELETE", `${baseUrl}/products/${id}`);
};
