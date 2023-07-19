import { useState, useEffect } from "react";
import styles from "./MainCart.module.css";
import MainCartList from "./MainCartList";
import MainCartSum from "./MainCartSum";

const MainCart = () => {
  const [cartData, setcartData] = useState(null);

  const handleUpdateCardData = (data) => {
    setcartData(data)
  }

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setcartData(data);
        } 
      });
  }, []);

  return (
    <div className={styles.container}>
      {cartData ? (
        <>
          <p>My cart</p>
          <MainCartList cartData={cartData} handleUpdateCardData={handleUpdateCardData} />
          <MainCartSum />
        </>
      ) : (
        <div>
          <p>No tickets in your cart</p>
          <p>Why not plan a trip</p>
        </div>
      )}
    </div>
  );
};

export default MainCart;
