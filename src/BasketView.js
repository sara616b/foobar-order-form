import BeerForBasketView from "./BeerForBasketView";
import { Link } from "react-router-dom";
import RadioButton from "./RadioButton";

export default function BasketView({
  basket,
  removeFromBasket,
  updateAmountInBasket,
  updateOrderData,
  setTableNumber,
  setPaymentMethod,
  paymentMethod,
}) {
  console.log(paymentMethod);
  let totalPrice = 0;
  basket.map((product) => (totalPrice += product.amount * 25));
  let paymentMethods = ["Credit Card", "MobilePay", "ApplePay", "Cash"];

  return (
    <div
      style={{
        display: "grid",
        gridGap: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridGap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
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
      </div>

      <p>Total: {totalPrice} kr.</p>

      <form onSubmit={(e) => updateOrderData(e)}>
        <label htmlFor="tablenumber">
          <h3>Tablenumber</h3>
          <input
            type="number"
            name="tablenumber"
            id="tablenumber"
            placeholder="xx"
            min="0"
            max="100"
            style={{
              width: "100px",
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setTableNumber(e.target.value);
            }}
          />
          <span className="error" id="err-name" aria-live="assertive">
            Must be a valid number
          </span>
        </label>

        <h3>Choose Payment Method</h3>
        {paymentMethods.map((element) => {
          return (
            <RadioButton
              text={element}
              name="payment"
              key={element}
              onChange={setPaymentMethod}
            ></RadioButton>
          );
        })}
      </form>

      <Link to={paymentMethod === "Credit Card" ? "/payment" : "/thanks"}>
        <button
          style={{
            background: "#F69335",
            border: "5px solid #FAEBDE",
            padding: "20px",
            margin: "10px 0",
            boxSizing: "border-box",
            boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.51)",
            width: "100%",
          }}
        >
          Go To Payment
        </button>
      </Link>
    </div>
  );
}
