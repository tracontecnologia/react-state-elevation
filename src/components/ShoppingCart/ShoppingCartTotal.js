import { Table } from '../Table';
import { ShoppingCartSubTitle } from './ShoppingCartSubTitle';
import styles from './ShoppingCartTotal.module.css';

export function ShoppingCartTotal({ productsTotalPrice = 0, freightRate = 0 }) {
  function handleRenderItem(item, key) {
    switch (key) {
      case 'subTotal':
        return Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(item.subTotal);

      default:
        return item[key];
    }
  }

  return (
    <div className={styles.section}>
      <ShoppingCartSubTitle>Total</ShoppingCartSubTitle>
      <Table
        data={[
          { description: 'Produtos', subTotal: productsTotalPrice },
          { description: 'Frete', subTotal: freightRate },
        ]}
        headers={[
          { key: 'description', label: 'Descrição' },
          { key: 'subTotal', label: 'Preço' },
        ]}
        footers={[
          {
            label: 'Preço',
            value: Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(productsTotalPrice + freightRate),
          },
        ]}
        renderItem={handleRenderItem}
      />
    </div>
  );
}
