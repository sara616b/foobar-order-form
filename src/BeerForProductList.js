import Button from "./Button";

export default function BeerForProductList() {
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
        }}
      >
        <div
          style={{
            flexBasis: "100px",
            flexGrow: "1",
          }}
        >
          Image
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "200px",
            flexGrow: "2",
            width: "100%",
            color: "#FAEBDE",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <h2>Beer</h2>
            <div
              style={{
                textAlign: "center",
                borderRadius: "50%",
                background: "#FAEBDE",
                color: "#0D0601",
                width: "25px",
                height: "25px",
              }}
            >
              i
            </div>
          </div>
          <div>
            <p>15 kr.</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              text="-"
              style={{
                border: "2px solid #F69335",
                boxSizing: "border-box",
                borderRadius: "33px",
                background: "#0D0601",
                color: "#FAEBDE",
                width: "40px",
                height: "20px",
              }}
            >
              {" "}
            </Button>
            <p>1</p>
            <Button
              text="+"
              style={{
                border: "2px solid #F69335",
                boxSizing: "border-box",
                borderRadius: "33px",
                background: "#0D0601",
                color: "#FAEBDE",
                width: "40px",
                height: "20px",
              }}
            >
              {" "}
            </Button>
          </div>
        </div>
      </div>
      <button
        style={{
          width: "100%",
          padding: "20px",
          background: "#FAEBDE",
          border: "5px solid #C9802F",
          boxSizing: "border-box",
          boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.51)",
        }}
      >
        Add To Basket
      </button>
    </article>
  );
}
