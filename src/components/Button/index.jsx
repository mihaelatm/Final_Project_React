import styles from "./styles.module.css";

function Button({ text, width, height, onClick }) {
  return (
    <>
      <button className={styles.button}>{text}</button>
    </>
  );
}

export default Button;
