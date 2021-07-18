import styles from "./style.module.scss";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <span hidden={true}>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
