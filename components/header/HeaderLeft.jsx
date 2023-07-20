import Link from "next/link";
import styles from "./HeaderLeft.module.css";

const HeaderLeft = () => {
  return (
    <div className={styles.HeaderLeft}>
      <Link href="/">
        <p className={styles.p}>Tickethack</p>
      </Link>
      
    </div>
  );
};

export default HeaderLeft;
