import { ShopPage } from '../pages/ShopPage';
const shop = new ShopPage();

describe('Sort product in the category-all options', () => {
  
  it('Sorting by each option from the dropdown list', () => {
    shop.visitCategory();
    shop.getAllSortOptions().then($options => {
      const options = [...$options].map(o => o.innerText.trim());

      // iteration for each option
      options.forEach(option => {
        shop.visitCategory();                // refresh category
        shop.selectSortOption(option);       // select option
        shop.verifyProductsLoaded();         
      });
    });
  });
});