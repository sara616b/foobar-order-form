import BeerForProductList from "./BeerForProductList";

export default function ProductView({ addToBasket, beerTypes, taps }) {
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
        ></BeerForProductList>
      ))}
    </div>
  );
}
