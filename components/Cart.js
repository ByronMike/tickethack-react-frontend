import styles from "../styles/Cart.module.css";
import HeaderLeft from "./header/HeaderLeft";
import HeaderRight from "./header/HeaderRight";
import MainCart from "./mainCart/MainCart";
import Footer from "./footer/Footer";

function Cart() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <HeaderLeft />
        <HeaderRight />
      </header>
      <main className={styles.main}>
        <MainCart />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Cart;
