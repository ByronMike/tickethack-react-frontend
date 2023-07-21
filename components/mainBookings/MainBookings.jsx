import { useState, useEffect } from "react";
import styles from "./MainBookings.module.css";
const moment = require("moment");

const MainBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // OBJECTIF : récupérer les trajets bookés et les afficher sur la page booking

    // Get bookings
    fetch("http://localhost:3000/bookings")
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setBookings(data.bookings);
        }
      });
  }, []);
  return (
    <div className={styles.container} style={{ backgroundColor: "#F0F1F2" }}>
      <div className={styles.cart}>
        <p style={{ fontWeight: "bold" }}>My bookings</p>
        <ul>
          {bookings ? (
            bookings.map((booking) => {
              return (
                <li className={styles.li} key={booking.trip._id}>
                  <span>
                    {booking.trip.departure} {">"} {booking.trip.arrival}
                  </span>
                  <span>{moment(booking.trip.date).format("HH:mm")}</span>
                  <span>{booking.trip.price}€</span>
                  <span class="departure">
                    Departure ${moment(booking.trip.date).fromNow()}
                  </span>
                </li>
              );
            })
          ) : (
            <div className={styles.card}>
              <p style={{ fontWeight: "bold" }}>No booking yet.</p>
              <p style={{ paddingTop: "30px" }}>Why not plan a trip?</p>
            </div>
          )}
        </ul>
        <div style={{border: "1px solid black", width: "150px"}}></div>
        <p style={{ fontWeight: "bold", color: "green", margin: "20px 0px"}}>Enjoy your travels with Tickethack</p>
      </div>
    </div>
  );
};

export default MainBookings;
