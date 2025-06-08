import { ShopPage } from '../pages/ShopPage';

describe('Navigate to a randomly selected category', () => {
  const shop = new ShopPage();

  it('should open random selected category', () => {
    shop.randomCategory();
    });
  });

