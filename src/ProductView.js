import BeerForProductList from "./BeerForProductList";

export default function ProductView({ addToBasket, beerTypes }) {
  return (
    <div
      style={{
        display: "grid",
        gridGap: "20px",
      }}
    >
      {beerTypes.map((product) => (
        <BeerForProductList
          info={product}
          key={product.name}
          addToBasket={addToBasket}
        ></BeerForProductList>
      ))}
    </div>
  );
}
