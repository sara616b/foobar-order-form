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
          padding: "15px 0",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        ← back{text}
      </button>
    </Link>
  );
}
