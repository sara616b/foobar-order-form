export default function BeerForProductList() {
  return (
    <article
      style={{
        padding: "10px",
        margin: "10px",
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
            flexBasis: "1",
          }}
        >
          Image
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "2",
            width: "100%",
          }}
        >
          <div>
            <h2>Beer</h2>
          </div>
          <div>
            <p>15 kr.</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
        </div>
      </div>
      <button
        style={{
          width: "100%",
          padding: "20px",
        }}
      >
        Add To Basket
      </button>
    </article>
  );
}
