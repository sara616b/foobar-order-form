import { Link } from "react-router-dom";

export default function Header({ basket }) {
  let basketAmount = 0;
  basket.map((product) => (basketAmount += product.amount));
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div>Queue</div>
      <div>
        <h1
          style={{
            fontFamily: "Rasa, serif",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "48px",
            lineHeight: "58px",
            textAlign: "center",
            letterSpacing: "0.155em",
            color: "#FFFFFF",
            textShadow: "1px 1px 0px rgba(250, 235, 222, 0.21)",
          }}
        >
          FooBar
        </h1>
      </div>

      <Link to="/basket">
        <div>Basket {basketAmount}</div>
      </Link>
    </header>
  );
}
