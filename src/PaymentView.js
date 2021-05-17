import BasketView from "./BasketView";
import Button from "./Button";

export default function PaymentView() {
  return (
    <section className="placeContent">

      <h1>Add payment details and review order</h1>

      <form>

        <label htmlFor="cardNumber"> Card number

          <input 
          type="text" 
          name="cardNumber" 
          id="cardNumber"
          autocomplete="xyz"
          placeholder="XXXX-XXXX-XXXX-XXXX" />

        </label>

        <label htmlFor="nameOnCard"> Name on card

          <input 
          type="text" 
          name="nameOnCard" 
          id="nameOnCard"
          autocomplete="xyz"
          placeholder="Full name"
          pattern="[^0-9]" />

          <span 
          class="error" 
          id="err-name" 
          aria-live="assertive"> Can not contain numbers
          </span>

        </label>

        <label htmlFor="expirationDate"> Expiration date

          <input 
          type="text" 
          name="expirationDate" 
          id="expirationDate"
          autocomplete="xyz" 
          placeholder="2021-06-04"
          min="2021-01-01" max="2028-12-31"/>

        </label>

        <label htmlFor="cvv"> CVV

          <input 
          type="number" 
          name="cvv" 
          id="cvv" 
          placeholder="XXX"
          min="000"
          max="999"
          />

          <span 
          class="error" 
          id="err-name" 
          aria-live="assertive"> Must be a valid number
          </span>

        </label>

      </form>

      <h2>Order details</h2>

      <BasketView/>

      {/* <h2>Table number: <TableNumber/></h2> */}

      <Button
        text="Place order"
        style={{
          background: "#F69335",
          border: "3px solid #FFFFFF",
          padding: "10px",
          boxSizing: "border-box",
          boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.51)",
          fontSize: "16px",
        }}
      ></Button>

    </section>

  );
}
