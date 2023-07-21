import Link from "next/link";

const MainCartSum = ({cartSum}) => {
  const handlePurchase = () => {
    // OBJECTIF : ajouter les trajet vers booking après clic sur le bouton "purchase"
    fetch("http://localhost:3000/bookings", { method: "PUT" })
      .then((response) => response.json())
      .then((data) => {
        data.result;
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#01153F",
        width: "100%",
        height: "45px",
      }}
    >
      <p style={{ color: "white", marginLeft: "100px" }}>Total: {cartSum}€ </p>
      <Link href="/bookings">
        <button
          onClick={handlePurchase}
          style={{
            display: "flex",
            justifyContent:"center",
            alignItems: "center",
            marginRight: "100px",
            padding: "10px",
            height: "15px",
            backgroundColor: "#469e86",
            border: "#469e86",
            borderRadius: "5px",
            color: "white",
          }}
        >
          Purchase
        </button>
      </Link>
    </div>
  );
};

export default MainCartSum;
