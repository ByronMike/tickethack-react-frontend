import { useState, useEffect } from "react";
import styles from "./MainBookings.module.css"
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
    <div >
      <p>MainBookings</p>
      <ul>
        {bookings &&
          bookings.map((booking) => {
            return (
              <li key={booking.trip._id}>
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
          })}
      </ul>
      <p>Enjoy you travels with Tickethack</p>
    </div>
  );
};

export default MainBookings;
