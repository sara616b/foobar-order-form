export default function ThankYouView() {
  return (
    <section className="placeContent">

      <div className="textAlign">
        <h1 className="bigText">Thank you for your order!</h1>
      </div>

      <div className="textAlign">
        <h2>Your order is on the way.</h2>
        <h2 className="colorOrange">Your order number is:</h2>
        <h2 className="colorOrange">XXX</h2>
      </div>

      <div className="placeText">
        <p>
          If you wish to inquire about your order 
          please get in contact with our bartenders 
          and tell them your order number.
        </p>
      </div>

      <div className="placeButton">
        <button className="formButton">Back to frontpage</button>
      </div>

    </section>
  );
}
