import { Link } from "react-router-dom";

export default function BackButton({ linkTo, text }) {
  return (
    <Link to={linkTo}>
      <button
        style={{
          background: "none",
          border: "none",
          color: "white",
          opacity: "0.9",
          textAlign: "left",
          padding: "15px 0",
          width: "100%",
        }}
      >
        ← back{text}
      </button>
    </Link>
  );
}
