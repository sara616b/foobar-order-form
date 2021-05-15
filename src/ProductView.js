import BeerForProductList from "./BeerForProductList";

export default function ProductView() {
  return (
    <div
      style={{
        display: "grid",
        gridGap: "20px",
      }}
    >
      <BeerForProductList></BeerForProductList>
      <BeerForProductList></BeerForProductList>
      <BeerForProductList></BeerForProductList>
    </div>
  );
}
