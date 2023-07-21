import styles from "./MainBottomRight.module.css";
import Image from "next/image";
import Link from "next/link";
import trainPicture from "../../public/images/train.png";

const MainBottomRight = ({ trips }) => {
  let content;

  function handleUpdateTripBooking(tripId) {
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tripId: tripId }),
    }).then((response) => response.json());
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
          width: "300px",
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {trips.data.map((trip) => {
          return (
            <li
              key={trip._id}
              className={styles.li}
            >
              <p className={styles.p}>{trip.departure} </p>
              <p>{`>`}</p>
              &nbsp;
              <p className={styles.p}>{trip.arrival}</p>
              <p className={styles.p}>{`${trip.hour}:${trip.minute}`}</p>
              <p className={styles.p} style={{fontWeight: "bold"}}>{trip.price}€</p>
              <Link href="/cart">
                <button className={styles.button} onClick={() => handleUpdateTripBooking(trip._id)}>
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
