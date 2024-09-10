import styles from "./styles.module.css";
import Button from "../Button";

function Banner() {
  return (
    <section className={styles.banner_container}>
      <h1 className={styles.banner_title}>
        Amazing Discounts on Pets Products!
      </h1>
      <Button text="Check out" />
    </section>
  );
}

export default Banner;
