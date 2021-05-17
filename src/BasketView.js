import BeerForBasketView from "./BeerForBasketView";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function BasketView({
  basket,
  removeFromBasket,
  updateAmountInBasket,
}) {
  let totalPrice = 0;
  basket.map((product) => (totalPrice += product.amount * 25));

  return (
    <div
      style={{
        display: "grid",
        gridGap: "20px",
        margin: "10px",
      }}
    >
      {basket.length !== 0 ? (
        basket.map((product) => (
          <BeerForBasketView
            info={product}
            key={product.name}
            removeFromBasket={removeFromBasket}
            updateAmountInBasket={updateAmountInBasket}
          ></BeerForBasketView>
        ))
      ) : (
        <h2>Your basket is empty!</h2>
      )}

      <p>Total: {totalPrice} kr.</p>
      <p>Table number</p>
      <p>Choose Payment Metode</p>

      <Link to="/payment">
        <Button
          text="Place Order"
          style={{
            background: "#F69335",
            border: "5px solid #FAEBDE",
            padding: "20px",
            margin: "10px 0",
            boxSizing: "border-box",
            boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.51)",
            width: "100%",
          }}
        ></Button>
      </Link>
    </div>
  );
}
