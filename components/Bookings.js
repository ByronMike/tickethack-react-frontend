import styles from "../styles/Cart.module.css";
import HeaderLeft from "./header/HeaderLeft";
import HeaderRight from "./header/HeaderRight";
import MainBookings from "./mainBookings/MainBookings";
import Footer from "./footer/Footer";

function Bookings() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <HeaderLeft />
        <HeaderRight />
      </header>
      <main className={styles.main}>
        <MainBookings />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Bookings;