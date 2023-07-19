import React, { useEffect, useState } from "react";

const MainCartList = ({ cartData, handleUpdateCardData }) => {
  const [data, setData] = useState([]);

  function handleRemoveFromCart(tripId) {
    fetch(`http://localhost:3000/cart/${tripId}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.result) {
          // Call the API to fetch the updated cart data
          fetch("http://localhost:3000/cart")
            .then((response) => response.json())
            .then((cartData) => {
              setData(cartData.data);
              handleUpdateCardData(cartData.data);
            });
        }
      });
  }

  useEffect(() => {
    if (cartData && cartData.data) {
      setData(cartData.data);
    }
  }, [cartData]);

  return data ? (
    <ul>
      {data.map((addedTrip) => (
        <li key={addedTrip.trip._id}>
          <p>{addedTrip.trip.departure}</p>
          <p>{addedTrip.trip.arrival}</p>
          <p>{`${addedTrip.hour}:${addedTrip.minute}`}</p>
          <button onClick={() => handleRemoveFromCart(addedTrip.trip._id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};

export default MainCartList;
