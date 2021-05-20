import { useState } from "react";

export default function BeerForProductList({
  info,
  addToBasket,
  taps,
  togglePopup,
}) {
  const [amount, setAmount] = useState(1);

  const beersOnTap = taps.map((tap) => tap.beer);
  const soldOut = beersOnTap.indexOf(info.name) === -1 ? true : false;
  return (
    <article
      style={{
        padding: "15px",
        background: "#0D0601",
        border: "1px solid #FFFFFF",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            flexBasis: "100px",
            flexGrow: "1",
            color: "white",
            width: "100px",
            backgroundImage: "url('./images/" + info.label + "')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginRight: "10px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "200px",
            flexGrow: "2",
            width: "100%",
            color: "white",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <h2
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "20px",
                lineHeight: "28px",
                letterSpacing: "0.1em",
              }}
            >
              {info.name}
            </h2>
            <div
              style={{
                textAlign: "center",
                borderRadius: "50%",
                background: "#FAEBDE",
                fontWeight: "600",
                color: "#0D0601",
                width: "25px",
                height: "25px",
                margin: "-3px 0 0 5px",
                cursor: "pointer",
              }}
              onClick={(e) => togglePopup(info)}
            >
              i
            </div>
          </div>
          <div>
            <p
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "18px",
              }}
            >
              25 kr/stk
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className={soldOut ? "soldout" : ""}
          >
            <button
              style={{
                border: "2px solid #F69335",
                boxSizing: "border-box",
                borderRadius: "33px",
                background: "#0D0601",
                color: "#FAEBDE",
                width: "40px",
                height: "20px",
              }}
              onClick={() => {
                setAmount((prevState) => (prevState -= 1));
              }}
              disabled={amount === 1 || soldOut}
            >
              -
            </button>
            <p
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "20px",
                lineHeight: "23px",
              }}
            >
              {amount}
            </p>
            <button
              style={{
                border: "2px solid #F69335",
                boxSizing: "border-box",
                borderRadius: "33px",
                background: "#0D0601",
                color: "#FAEBDE",
                width: "40px",
                height: "20px",
              }}
              onClick={() => {
                setAmount((prevState) => (prevState += 1));
              }}
              disabled={soldOut}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "15px",
          textAlign: "center",
          padding: "15px",
          background: "white",
          border: "3px solid #C9802F",
          boxSizing: "border-box",
          boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.51)",
          width: "100%",
        }}
        onClick={() => {
          info.amount = amount;
          addToBasket(info);
        }}
        disabled={soldOut}
      >
        {soldOut ? "Not On Tap" : "Add To Basket"}
      </button>
    </article>
  );
}
