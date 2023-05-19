import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <h1>Seus cartões</h1>
        <p>nenhum cartão disponível. Adicionar um novo!</p>
      </div>
      <div className={styles.transactions_container}>
        <div className={styles.transactions_text}>
          <h1>Transações </h1>
        </div>
        <ul>
          <li>Netflix</li>
          <li>iCloud</li>
          <li>Amazon prime</li>
        </ul>
      </div>
      <div className={styles.footer_container}></div>
    </div>
  );
}
