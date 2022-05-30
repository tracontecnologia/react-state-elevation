import { Button } from '../Button';
import styles from './ShoppingCartCustomerAddress.module.css';
import { ShoppingCartSubTitle } from './ShoppingCartSubTitle';

export function ShoppingCartCustomerAddress({ customer }) {
  return (
    <div className={styles.section}>
      <ShoppingCartSubTitle>Seu endereço de entrega</ShoppingCartSubTitle>
      <p>
        {customer.streetName}, {customer.streetNumber}, {customer.neighboorhood}
        , {customer.city} - {customer.state}
      </p>
      <Button>Alterar endereço de entrega</Button>
    </div>
  );
}
