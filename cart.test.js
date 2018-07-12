let cart = require('./cart')
let data = require('./data/cars')

describe('Cart Properties: ', () => {
  test('Cart should default to an empty array', () => {
    expect(Array.isArray(cart.cart))
    .toEqual( true )  
  });

  test('Total should default to 0', () => {
    expect(cart.total).toEqual(0)
  });
});

describe('Cart Methods: ', () => {
  test('Method should sdd to cart', () => {

  });

  test('', () => {

  });

  test('', () => {

  });

  test('', () => {

  });

  test('', () => {

  });

})