import styles from './ShoppingCartSubTitle.module.css';

export function ShoppingCartSubTitle({ children }) {
  return <h2 className={styles.subTitle}>{children}</h2>;
}
