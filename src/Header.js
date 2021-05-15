export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div>Queue</div>
      <div>Logo</div>
      <div>Basket</div>
    </header>
  );
}
