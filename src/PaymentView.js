import BackButton from "./BackButton";
import { Link, useHistory } from "react-router-dom";
import BeerForPaymentView from "./BeerForPaymentView";

export default function PaymentView({
  tablenumber,
  orderInfo,
  paymentMethod,
  basket,
}) {
  let history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    post(e.target);
    history.push("/thanks");
  };

  let totalPrice = 0;
  basket.map((product) => (totalPrice += product.amount * 25));

  async function post(form) {
    const postData = JSON.stringify({
      cardNumber: form.elements.cardNumber.value,
      nameOnCard: form.elements.nameOnCard.value,
      expirationDate: form.elements.expirationDate.value,
      cvv: form.elements.cvv.value,
      order: orderInfo,
      tableNumber: tablenumber,
      paymentMethod: paymentMethod,
    });

    const jsonData = await fetch("https://exsam3sem-dfd1.restdb.io/rest/beer", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "60990365e3b6e02545eda659",
        "cache-control": "no-cache",
      },
      body: postData,
    });

    const jsonObject = await jsonData.json();

    console.log(jsonObject);
  }

  return (
    <section className="placeContent">
      <BackButton linkTo={"/basket"}></BackButton>

      {paymentMethod === "Credit Card" ? (
        <div>
          <h2>Add payment details and review order</h2>

          <div
            style={{
              display: "grid",
              padding: "10px",
              margin: "10px 0",
              gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
              border: "solid white 1px",
            }}
          >
            <h3>Order details</h3>

            {basket.length !== 0 ? (
              basket.map((product) => (
                <BeerForPaymentView
                  info={product}
                  key={product.name}
                ></BeerForPaymentView>
              ))
            ) : (
              <h2>Your basket is empty!</h2>
            )}

            <h3>
              Total: <span className="totalPrice">{totalPrice} kr.</span>
            </h3>
            <h3>
              Table number: <span className="tableNumber">{tablenumber}</span>
            </h3>
          </div>

          <form onSubmit={submitHandler}>
            <label htmlFor="cardNumber">
              Card number
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                autoComplete="xyz"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                minLength="16"
                maxLength="19"
                min="0000 0000 0000 0000"
                max="9999 9999 9999 9999"
              />
              <span className="error" id="err-name" aria-live="assertive">
                Can't be more or less than 16 numbers
              </span>
            </label>

            <label htmlFor="nameOnCard">
              Name on card
              <input
                type="text"
                name="nameOnCard"
                id="nameOnCard"
                autoComplete="xyz"
                placeholder="Full name"
                pattern="[a-zA-Z ]+"
              />
              <span className="error" id="err-name" aria-live="assertive">
                Can not contain numbers
              </span>
            </label>

            <label htmlFor="expirationDate">
              Expiration date
              <input
                type="text"
                name="expirationDate"
                id="expirationDate"
                autoComplete="xyz"
                placeholder="2021-06-04"
                min="2021-01-01"
                max="2028-12-31"
              />
            </label>

            <label htmlFor="cvv">
              CVV
              <input
                type="number"
                name="cvv"
                id="cvv"
                placeholder="XXX"
                min="000"
                max="999"
              />
              <span className="error" id="err-name" aria-live="assertive">
                Must be a valid number
              </span>
            </label>

            <button type="submit" className="formButton">
              Place order
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>
            This is a prototype, so you won't be directed to your chosen payment
            method. Please click place order to move on
          </h2>

          <Link to="/thanks">
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
              Place Order
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}
