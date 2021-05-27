import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import ProductView from "./ProductView";
import BasketView from "./BasketView";
import PaymentView from "./PaymentView";
import ThankYouView from "./ThankYouView";

function App() {
  const [beerTypes, setBeerTypes] = useState([]);
  const [taps, setTaps] = useState([]);
  const [basket, setBasket] = useState([]);
  const [tablenumber, setTableNumber] = useState(0);
  const [orderInfo, setOrderInfo] = useState();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [queueLenght, setQueueLenght] = useState(0);
  const [orderNumber, setOrderNumber] = useState(0);
  useEffect(() => {
    fetch("https://foobar-vas.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then((data) => {
        setBeerTypes(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://foobar-vas.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        setTaps(data.taps);
      });
  }, []);
  useEffect(() => {
    fetch("https://foobar-vas.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        setQueueLenght(data.queue.length);
      });
  }, [basket]);
  useEffect(() => {
    let updatedOrder = basket.map((item) => {
      let itemData = { name: item.name, amount: item.amount };
      return itemData;
    });
    setOrderInfo(updatedOrder);
  }, [basket]);

  function updateOrderNumber(orderNumberValue) {
    setOrderNumber(orderNumberValue);

    console.log(orderNumber);
  }

  function addToBasket(payload) {
    const inBasket = basket.findIndex((item) => item.name === payload.name);
    if (inBasket === -1) {
      //add payload to basket
      const nextPayload = { ...payload };
      nextPayload.amount = payload.amount;
      setBasket((prevState) => [...prevState, nextPayload]);
    } else {
      //if same beer is already in basket -> add to amount
      const nextBasket = basket.map((item) => {
        if (item.name === payload.name) {
          item.amount += payload.amount;
        }
        return item;
      });
      setBasket(nextBasket);
    }
  }
  function removeFromBasket(payload) {
    //TODO - read up on to see if more correct way
    const itemToRemove = basket.findIndex((item) => item.name === payload.name);
    basket.splice(itemToRemove, 1);
    setBasket((prevState) => [...prevState]);
  }
  function updateAmountInBasket(payload, action) {
    const nextBasket = basket.map((item) => {
      if (item.name === payload.name) {
        if (action === "+") {
          item.amount += 1;
        } else if (action === "-") {
          item.amount -= 1;
        }
      }
      return item;
    });
    setBasket(nextBasket);
  }

  function clearBasket() {
    setBasket([]);
  }

  const beersOnTap = taps.map((tap) => tap.beer);
  let copy = beerTypes.map((item) => {
    item["isSoldOut"] = beersOnTap.indexOf(item.name) === -1 ? true : false;
    return item;
  });
  copy.sort((a, b) => {
    return a.isSoldOut - b.isSoldOut;
  });

  return (
    <Router
    // basename="/kea/frontend/foobar"
    >
      <div
        className="App"
        style={{
          display: "grid",
          gridGap: "20px",
        }}
      >
        <div className="background"></div>
        <Header basket={basket} queueLenght={queueLenght}></Header>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div
                  style={{
                    margin: "auto",
                    padding: "10px",
                    maxWidth: "1000px",
                  }}
                >
                  <a href="http://skovgaart.dk/kea/foobar/index.html">
                    <button
                      style={{
                        display: "grid",
                        background: "none",
                        border: "none",
                        color: "white",
                        opacity: "0.9",
                        textAlign: "left",
                        paddingBottom: "15px",
                        width: "100%",
                        paddingLeft: "10px",
                        maxWidth: "1000px",
                        margin: "auto",
                      }}
                    >
                      ← back
                    </button>
                  </a>

                  <ProductView
                    addToBasket={addToBasket}
                    beerTypes={copy}
                    taps={taps}
                  ></ProductView>
                  <div
                    style={{
                      display: "grid",
                      width: "60%",
                      margin: "10px auto",
                      minWidth: "150px",
                    }}
                  >
                    <Link to="/basket">
                      <Button
                        text="View Basket"
                        style={{
                          background: "#F69335",
                          border: "5px solid #FAEBDE",
                          padding: "20px",
                          boxSizing: "border-box",
                          boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.51)",
                          width: "100%",
                        }}
                      ></Button>
                    </Link>
                  </div>
                </div>
              )}
            />
            <Route
              path="/basket"
              render={() => (
                <div
                  style={{
                    margin: "10px",
                  }}
                >
                  <BasketView
                    basket={basket}
                    removeFromBasket={removeFromBasket}
                    updateAmountInBasket={updateAmountInBasket}
                    setTableNumber={setTableNumber}
                    setPaymentMethod={setPaymentMethod}
                    paymentMethod={paymentMethod}
                  ></BasketView>
                </div>
              )}
            />
            <Route
              path="/payment"
              render={() => (
                <div>
                  <PaymentView
                    tablenumber={tablenumber}
                    orderInfo={orderInfo}
                    paymentMethod={paymentMethod}
                    basket={basket}
                    clearBasket={clearBasket}
                    updateOrderNumber={updateOrderNumber}
                  ></PaymentView>
                </div>
              )}
            />
            <Route
              path="/thanks"
              render={() => (
                <div>
                  <a href="http://skovgaart.dk/kea/foobar/index.html">
                    <button
                      style={{
                        display: "grid",
                        background: "none",
                        border: "none",
                        color: "white",
                        opacity: "0.9",
                        textAlign: "left",
                        paddingBottom: "15px",
                        width: "100%",
                        paddingLeft: "10px",
                        maxWidth: "1000px",
                        margin: "auto",
                      }}
                    >
                      ← to frontpage
                    </button>
                  </a>
                  <ThankYouView orderNumber={orderNumber}></ThankYouView>
                </div>
              )}
            />
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
