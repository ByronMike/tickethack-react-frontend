import { useState, useEffect } from "react";
import styles from "./MainCart.module.css";
import MainCartList from "./MainCartList";
import MainCartSum from "./MainCartSum";

const MainCart = () => {
  const [cartData, setcartData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((data) => {
        console.log("cartData", data)
        if (data.result) {
          setcartData(data);
        }
      });
  }, []);

  return (
    <div className={styles.container}>
      <p>My cart</p>
      <MainCartList cartData={cartData}/>
      <MainCartSum />
    </div>
  );
};

export default MainCart;
