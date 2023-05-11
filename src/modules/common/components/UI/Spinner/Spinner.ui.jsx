import styles from "./Spinner.module.scss";
import Pizza from "./pizza";

export const Spinner = () => {

  let pizza = new Pizza("pizza");
  (function update() {
    requestAnimationFrame(update);
    pizza.update();
  }());

  return (
    <div className={styles.spinner}>
      <canvas id="pizza"></canvas>
    </div>
  );
};
