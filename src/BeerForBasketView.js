export default function BeerForBasketView({
  info,
  removeFromBasket,
  updateAmountInBasket,
}) {
  return (
    <article
      style={{
        padding: "10px",
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
            color: "white",
            backgroundImage: "url('./images/" + info.label + "')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            marginRight: "10px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "200px",
            flexGrow: "4",
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
            <button
              style={{
                textAlign: "center",
                borderRadius: "50%",
                background: "#FAEBDE",
                fontWeight: "600",
                color: "#0D0601",
                width: "25px",
                height: "25px",
                margin: "-3px 0 0 5px",
                border: "none",
              }}
              text="x"
              onClick={() => removeFromBasket(info)}
            >
              x
            </button>
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
              {"Subtotal: " + info.amount * 25 + " kr."}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
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
              onClick={() => updateAmountInBasket(info, "-")}
              disabled={info.amount === 1}
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
                padding: "0 20px",
              }}
            >
              {info.amount}
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
              onClick={() => updateAmountInBasket(info, "+")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
