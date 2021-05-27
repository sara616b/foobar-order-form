export default function BackButton({ linkTo, text, type }) {
  return (
    <button
      style={{
        display: "grid",
        background: "none",
        border: "none",
        color: "white",
        opacity: "0.9",
        textAlign: "left",
        paddingBottom: "15px",
        width: "100%",
        paddingLeft: "10px",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      ← back{text}
    </button>
  );
}
