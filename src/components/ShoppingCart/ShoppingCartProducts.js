import styles from './ShoppingCartProducts.module.css';
import { ShoppingCartSubTitle } from './ShoppingCartSubTitle';
import { ShoppingCartTable } from './ShoppingCartTable';

export function ShoppingCartProducts({ products, onChangeQuantity, onDelete }) {
  return (
    <div className={styles.section}>
      <ShoppingCartSubTitle>Produtos</ShoppingCartSubTitle>
      <ShoppingCartTable
        data={products}
        onChangeQuantity={onChangeQuantity}
        onDelete={onDelete}
      />
    </div>
  );
}
