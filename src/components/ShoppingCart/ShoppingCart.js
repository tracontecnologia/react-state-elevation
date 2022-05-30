import { useState } from 'react';

import styles from './ShoppingCart.module.css';
import { ShoppingCartTitle } from './ShoppingCartTitle';
import { ShoppingCartProducts } from './ShoppingCartProducts';
import { ShoppingCartCustomerAddress } from './ShoppingCartCustomerAddress';
import { ShoppingCartTotal } from './ShoppingCartTotal';
import { ShoppingCartConfirm } from './ShoppingCartConfirm';

const apiMock = require('./ApiMock.json');

export function ShoppingCart() {
  const [products, setProducts] = useState(apiMock.products);

  function handleOnChangeQuantityProduct(index, newQuantity) {
    setProducts((prev) => {
      const copy = [...prev];
      if (newQuantity > 0) {
        copy[index].quantity = newQuantity;
      }
      return copy;
    });
  }

  function handleOnDeleteProduct(index) {
    setProducts((prev) => {
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
  }

  const productsTotalPrice = products.reduce(
    (total, product) => (total += product.quantity * product.unitPrice),
    0
  );

  return (
    <div className={styles.shoppingCart}>
      <ShoppingCartTitle>Sua sacola de compras</ShoppingCartTitle>
      <ShoppingCartProducts
        products={products}
        onChangeQuantity={handleOnChangeQuantityProduct}
        onDelete={handleOnDeleteProduct}
      />
      <ShoppingCartCustomerAddress customer={apiMock.customer} />
      <ShoppingCartTotal
        productsTotalPrice={productsTotalPrice}
        freightRate={apiMock.freightRate}
      />
      <ShoppingCartConfirm />
    </div>
  );
}
