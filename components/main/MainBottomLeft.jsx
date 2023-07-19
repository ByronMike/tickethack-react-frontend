import styles from "./MainBottomLeft.module.css";
import { useState } from "react";

const MainBottomLeft = ({ updateTrips }) => {
  const [departure, setDeparture] = useState("Marseille");
  const [arrival, setArrival] = useState("Paris");
  const [date, setDate] = useState("2022-11-08");

  const handleDeparture = (event) => {
    setDeparture(event.target.value);
    console.log({ departure });
  };

  const handleArrival = (event) => {
    setArrival(event.target.value);
    console.log({ arrival });
  };

  const handleDate = (event) => {
    setDate(event.target.value);
    console.log({ date });
  };

  const handleFetchData = () => {
    if (!departure || !arrival || !date) {
      return;
    }

    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          updateTrips(data);
        }
      });
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={departure}
        placeholder="Departure"
        className={styles.input}
        onChange={handleDeparture}
      ></input>
      <input
        type="text"
        value={arrival}
        placeholder="Arrival"
        className={styles.input}
        onChange={handleArrival}
      ></input>
      <input
        type="date"
        value={date}
        className={styles.input}
        style={{ marginTop: "50px" }}
        onChange={handleDate}
      ></input>
      <button
        cursor="pointer"
        className={styles.button}
        onClick={handleFetchData}
      >
        Search
      </button>
    </div>
  );
};

export default MainBottomLeft;
