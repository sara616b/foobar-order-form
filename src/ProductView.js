import BeerForProductList from "./BeerForProductList";
import Button from "./Button";

export default function ProductView() {
  return (
    <div
      style={{
        display: "grid",
        gridGap: "20px",
        margin: "10px",
      }}
    >
      <Button
        text="View Basket"
        style={{
          background: "#F69335",
          border: "5px solid #FAEBDE",
          padding: "20px",
          boxSizing: "border-box",
          boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.51)",
        }}
      ></Button>
      <BeerForProductList></BeerForProductList>
      <BeerForProductList></BeerForProductList>
      <BeerForProductList></BeerForProductList>
    </div>
  );
}
