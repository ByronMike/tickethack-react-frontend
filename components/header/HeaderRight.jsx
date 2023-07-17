import styles from "./HeaderRight.module.css"

const HeaderRight = () => {
  return (
    <div className={styles.HeaderRight}>
      <p className={styles.p}>Cart</p>
      <p className={styles.p}>Bookings</p>
    </div>
  );
};

export default HeaderRight;
