import styles from "./news.module.scss";

const News = () => {
  return (
    <section className={styles.news}>
      <div className={styles["buttons-wrap"]}>
        <button className={styles.button}>Newsroom</button>
        <button className={styles.button}>Apple Leadership</button>
        <button className={styles.button}>Career Opportunities</button>
        <button className={styles.button}>Investor</button>
        <button className={styles.button}>Ethic & Compliance</button>
        <button className={styles.button}>Events</button>
        <button className={styles.button}>Contact Apple</button>
      </div>
    </section>
  );
};

export default News;
