import styles from "./styles.module.scss";

export const PortfolioGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.child1}>
        <div className={styles.maskTop}></div>
        <div className={styles.maskBottom}></div>
      </div>
      <div className={styles.child2} />
      <div className={styles.child3} />
    </div>
  );
};
