import styles from "../styles/Home.module.css";
import HeaderLeft from "./header/HeaderLeft";
import HeaderRight from "./header/HeaderRight";
import MainTop from "./main/MainTop";
import MainBottom from "./main/MainBottom";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <HeaderLeft />
        <HeaderRight />
      </header>
      <main className={styles.main}>
        <MainTop />
        <MainBottom />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
