import Link from "next/link";

const MainCartSum = () => {
  const handlePurchase = () => {
    // OBJECTIF : ajouter les trajet vers booking après clic sur le bouton "purchase"
    fetch("http://localhost:3000/bookings", { method: "PUT" })
      .then((response) => response.json())
      .then((data) => {
        data.result;
      });
  };

  return (
    <div>
      <p>Total: </p>
      <Link href="/bookings">
        <button onClick={handlePurchase}>Purchase</button>
      </Link>
    </div>
  );
};

export default MainCartSum;
