export default function RadioButton({ text, name, onChange }) {
  return (
    <div>
      <input
        type="radio"
        id={text}
        name={name}
        value={text}
        style={{
          margin: "6px 10px",
        }}
        onChange={(e) => onChange(e.target.value)}
      />
      <label
        htmlFor={text}
        style={{
          fontFamily: "Roboto",
          fontSize: "15px",
          display: "initial",
        }}
      >
        {text}
      </label>
    </div>
  );
}
