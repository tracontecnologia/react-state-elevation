import styles from './ShoppingCartTitle.module.css';

export function ShoppingCartTitle({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}
