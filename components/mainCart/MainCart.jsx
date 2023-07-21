import { useState, useEffect } from "react";
import styles from "./MainCart.module.css";
import MainCartList from "./MainCartList";
import MainCartSum from "./MainCartSum";

const MainCart = () => {
  const [cartData, setCartData] = useState(null);
  const [cartSum, setCartSum] = useState(0);
  
console.log("cartData", cartData)

const handleUpdateCardData = (data) => {
  setCartData(data);
  // Calculate the new cartSum based on updated cartData and pass it down to MainCartSum
  if(data){
    const sumOfPrices = data.reduce(
      (accumulator, currentValue) => accumulator + currentValue.trip.price,
      0
    );
    setCartSum(sumOfPrices);
  }
};

  useEffect(() => {
    if (cartData && cartData.data) {
      const sumOfPrices = cartData.data.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.trip.price,
        0
      );
      setCartSum(sumOfPrices);
    }
  }, [cartData]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setCartData(data);
        }
      });
  }, []);

  return (
    <div className={styles.container} style={{ backgroundColor: "#F0F1F2" }}>
      {cartData ? (
        <div className={styles.cart}>
          <p style={{ fontWeight: "bold" }}>My cart</p>
          <MainCartList
            cartData={cartData}
            handleUpdateCardData={handleUpdateCardData}
          />
          <MainCartSum cartSum={cartSum} />
        </div>
      ) : (
        <div className={styles.card}>
          <p style={{ fontWeight: "bold" }}>No tickets in your cart</p>
          <p style={{ paddingTop: "30px" }}>Why not plan a trip?</p>
        </div>
      )}
    </div>
  );
};

export default MainCart;
