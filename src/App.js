import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackButton from "./BackButton";
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

  let myStorage = window.localStorage;
  myStorage.clear();
  myStorage.setItem("tablenumber", tablenumber);
  myStorage.setItem("paymentMethod", paymentMethod);
  myStorage.setItem("basket", JSON.stringify(orderInfo));
  console.log(myStorage);

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
    let updatedOrder = basket.map((item) => {
      let itemData = { name: item.name, amount: item.amount };
      return itemData;
    });
    setOrderInfo(updatedOrder);
  }, [basket]);

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

  const copy = [...beerTypes];
  return (
    <Router>
      <div
        className="App"
        style={{
          display: "grid",
          gridGap: "20px",
        }}
      >
        <div className="background"></div>
        <Header basket={basket}></Header>
        <nav
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Link to="/">Shop</Link>
          <Link to="/basket">Basket</Link>
          <Link to="/payment">Payment</Link>
          <Link to="/thanks">Thanks</Link>
        </nav>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div
                  style={{
                    margin: "10px",
                  }}
                >
                  <BackButton linkTo={"/"}></BackButton>

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
                  <BackButton linkTo={"/"}></BackButton>

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
                  <BackButton linkTo={"/basket"}></BackButton>
                  <PaymentView myStorage={myStorage}></PaymentView>
                </div>
              )}
            />
            <Route
              path="/thanks"
              render={() => (
                <div>
                  <BackButton linkTo={"/"} text={" to frontpage"}></BackButton>
                  <ThankYouView></ThankYouView>
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
