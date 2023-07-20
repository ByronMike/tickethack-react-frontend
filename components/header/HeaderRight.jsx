import Link from "next/link";
import styles from "./HeaderRight.module.css";

const HeaderRight = () => {
  return (
    <div className={styles.HeaderRight}>
      <Link href="/cart">
        <p className={styles.p}>Cart</p>
      </Link>

      <Link href="/bookings">
        <p className={styles.p}>Bookings</p>
      </Link>
    </div>
  );
};

export default HeaderRight;
