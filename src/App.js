import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BeerForProductList from "./BeerForProductList";
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

  useEffect(() => {
    fetch("https://foobar-vas.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then((data) => {
        setBeerTypes(data);
      });
  }, []);

  console.log(beerTypes);

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <nav>
          <Link to="/">Shop</Link>
          <Link to="/basket">Basket</Link>
          <Link to="/payment">Payment</Link>
          <Link to="/thanks">Thanks</Link>
        </nav>
        <BackButton></BackButton>
        <Button text="View Basket"></Button>
        <main>
          <Switch>
            <Route path="/" exact render={() => <ProductView></ProductView>} />
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
