import styles from './ShoppingCartTable.module.css';
import { Button } from '../Button';
import { Table } from '../Table';

export function ShoppingCartTable({ data, onChangeQuantity, onDelete }) {
  function handleRenderItem(item, key, index) {
    switch (key) {
      case 'unitPrice':
        return Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(item.unitPrice);

      case 'price':
        return Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(item.unitPrice * item.quantity);

      case 'quantity':
        return (
          <div>
            <Button
              variant="smallButton"
              onClick={() => onChangeQuantity(index, item.quantity - 1)}
            >
              -
            </Button>
            <span className={styles.quantityText}>{item.quantity}</span>
            <Button
              variant="smallButton"
              onClick={() => onChangeQuantity(index, item.quantity + 1)}
            >
              +
            </Button>
          </div>
        );

      case 'delete':
        return (
          <Button variant="deleteSmallButton" onClick={() => onDelete(index)}>
            X
          </Button>
        );

      default:
        return item[key];
    }
  }

  return (
    <Table
      data={data}
      headers={[
        { key: 'name', label: 'Produto' },
        { key: 'quantity', label: 'Quantidade' },
        { key: 'unitPrice', label: 'Preço Unitário' },
        { key: 'price', label: 'Preço Total' },
        { key: 'delete', label: '' },
      ]}
      renderItem={handleRenderItem}
    />
  );
}
