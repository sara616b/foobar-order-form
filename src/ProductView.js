import BeerForProductList from "./BeerForProductList";
import { useState, useEffect } from "react";

export default function ProductView({ addToBasket, beerTypes, taps }) {
  const [popupInfo, setPopupInfo] = useState("Info To display in popup");
  let popupIsOpen = false;

  function openPopUp(info) {
    console.log("popup");
    popupIsOpen = popupIsOpen === true ? false : true;
    setPopupInfo(info);
  }
  return (
    <div
      style={{
        display: "grid",
        gridGap: "20px",
        width: "100%",
        margin: "auto",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      }}
    >
      {beerTypes.map((product) => (
        <BeerForProductList
          info={product}
          key={product.name}
          addToBasket={addToBasket}
          taps={taps}
          openPopUp={openPopUp}
        ></BeerForProductList>
      ))}
      {popupIsOpen ? (
        <section className="popup">
          <article>{popupInfo}</article>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}
