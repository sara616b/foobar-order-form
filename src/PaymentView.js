
export default function PaymentView() {

  const form = document.querySelector("form");

  const submitHandler = e =>{
    e.preventDefault()
    post()
  }

  async function post() {

    const postData = JSON.stringify({
      cardNumber:form.elements.cardNumber.value,
      nameOnCard:form.elements.nameOnCard.value,
      expirationDate:form.elements.expirationDate.value,
      cvv:form.elements.cvv.value,  
    });

/*     order:form.elements.order.value,
    tableNumber:form.elements.tableNumber.value, */

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
  };


    return (

      <section className="placeContent">

        <h1>Add payment details and review order</h1>

        <h2>Order details</h2>

        {/* <BasketView /> */}

        {/* <h2>Table number: <TableNumber/></h2> */}

        <form onSubmit={submitHandler}>

        <label htmlFor="cardNumber">
          {" "}
          Card number
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            autocomplete="xyz"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            minLength="16"
            maxLength="19"
            min="0000 0000 0000 0000"
            max="9999 9999 9999 9999"
          />
          <span 
          class="error" 
          id="err-name" 
          aria-live="assertive"> Can't be more or less than 16 numbers
          </span>
        </label>

        <label htmlFor="nameOnCard">
          {" "}
          Name on card
          <input
            type="text"
            name="nameOnCard"
            id="nameOnCard"
            autocomplete="xyz"
            placeholder="Full name"
            pattern="[a-zA-Z ]+"
          />
          <span class="error" id="err-name" aria-live="assertive">
            {" "}
            Can not contain numbers
          </span>
        </label>

        <label htmlFor="expirationDate">
          {" "}
          Expiration date
          <input
            type="text"
            name="expirationDate"
            id="expirationDate"
            autocomplete="xyz"
            placeholder="2021-06-04"
            min="2021-01-01"
            max="2028-12-31"
          />
        </label>

        <label htmlFor="cvv">
          {" "}
          CVV
          <input
            type="number"
            name="cvv"
            id="cvv"
            placeholder="XXX"
            min="000"
            max="999"
          />
          <span class="error" id="err-name" aria-live="assertive">
            Must be a valid number
          </span>
        </label>

        <button type="submit">Place order</button>
      </form>
    </section>

    );
}

