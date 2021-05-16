import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackButton from "./BackButton";
import ProductView from "./ProductView";
import BasketView from "./BasketView";
import PaymentView from "./PaymentView";
import ThankYouView from "./ThankYouView";

function App() {
  const [beerTypes, setBeerTypes] = useState([]);

  useEffect(() => {
    fetch("https://foobar-vas.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then((data) => {
        setBeerTypes(data);
      });
  }, []);

  console.log(beerTypes);

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
        <Header></Header>
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
        <BackButton></BackButton>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <ProductView beerTypes={copy}></ProductView>}
            />
            <Route path="/basket" render={() => <BasketView></BasketView>} />
            <Route path="/payment" render={() => <PaymentView></PaymentView>} />
            <Route
              path="/thanks"
              render={() => <ThankYouView></ThankYouView>}
            />
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
