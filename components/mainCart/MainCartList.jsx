const MainCartList = ({ cartData }) => {
    console.log("cartDataProps", cartData)
  return (
    <ul>
      {cartData?.data.map((addedTrip) => {
                //   const tripDate = new Date(addedTrip.date);
                //   const hours = String(tripDate.getHours()).padStart(2, "0");
                //   const minutes = String(tripDate.getMinutes()).padStart(2, "0");
        return (
          <li key={addedTrip.trip._id}>
            <p>{addedTrip.trip.departure}</p>
            <p>{addedTrip.trip.arrival}</p>
            <p>{addedTrip.trip.date}</p>
            {/* <p className={styles.p}>{`${hours}:${minutes}`}</p> */}
            <button></button>
          </li>
        );
      })}
    </ul>
  );
};

export default MainCartList;
