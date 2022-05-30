import { Button } from '../Button';
import styles from './ShoppingCartConfirm.module.css';
import { ShoppingCartSubTitle } from './ShoppingCartSubTitle';

export function ShoppingCartConfirm() {
  return (
    <div className={styles.section}>
      <ShoppingCartSubTitle>Finalizar compra</ShoppingCartSubTitle>
      <Button variant="primary">Confirmar Compra</Button>
    </div>
  );
}
