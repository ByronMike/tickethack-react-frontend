import { useState } from "react";
import styles from "../main/MainBottom.module.css";
import MainBottomLeft from "./MainBottomLeft";
import MainBottomRight from "./MainBottomRight";

const MainBottom = () => {
  const [trips, setTrips] = useState([]);

  const updateTrips = (fetchedTrips) => {
    setTrips(fetchedTrips);
  };

  return (
    <div className={styles.container}>
      <MainBottomLeft updateTrips={updateTrips} />
      <MainBottomRight trips={trips} />
    </div>
  );
};

export default MainBottom;
