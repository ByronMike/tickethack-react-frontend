import styles from "./MainBottomRight.module.css";
import Image from "next/image";
import Link from "next/link";
import trainPicture from "../../public/images/train.png";

const MainBottomRight = ({ trips }) => {
  let content;

  console.log("trips", trips.data);

  function handleUpdateTripBooking(tripId) {
    console.log("handleUpdateTripBookin", "click");
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Note : this.id in the body property of the POST request is a reference to the ID of the trip associated with the clicked element. This assumes that the clicked element has an id attribute that contains the trip ID.
      body: JSON.stringify({ tripId: tripId }),
    }).then((response) => response.json());
    // .then((data) => {
    //   data.result && window.location.assign("cart.html");
    // });
  }

  if (trips.result === undefined) {
    content = (
      <>
        <Image
          src={trainPicture}
          width={100}
          height={100}
          alt="Picture of the train"
        />
        <div className={styles.separator}></div>
        <p>It's time to book your future trip</p>
      </>
    );
  } else if (trips.result === true) {
    content = (
      <ul
        style={{
          overflowY: "scroll",
          height: "400px",
          width: "250px",
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {trips.data.map((trip) => {
          const tripDate = new Date(trip.date);
          const hours = String(tripDate.getHours()).padStart(2, "0");
          const minutes = String(tripDate.getMinutes()).padStart(2, "0");
          return (
            <li
              key={trip._id}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <p className={styles.p}>{trip.departure}</p>
              <p className={styles.p}>{trip.arrival}</p>
              <p className={styles.p}>{`${hours}:${minutes}`}</p>
              <Link href="/cart">
                <button onClick={() => handleUpdateTripBooking(trip._id)}>
                  Book
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  } else if (trips.result === false) {
    content = (
      <>
        <Image
          src={trainPicture}
          width={100}
          height={100}
          alt="Picture of the train"
        />
        <div className={styles.separator}></div>
        <p>No trip found</p>
      </>
    );
  }
  return <div className={styles.container}>{content}</div>;
};

export default MainBottomRight;
