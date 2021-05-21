import { Link } from "react-router-dom";

export default function BackButton({ linkTo, text }) {
  return (
    <Link to={linkTo}>
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
        }}
      >
        ← back{text}
      </button>
    </Link>
  );
}
