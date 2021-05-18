export default function RadioButton({ text, name }) {
  return (
    <div>
      <input
        type="radio"
        id={text}
        name={name}
        value="text"
        style={{
          margin: "6px 10px",
        }}
      />
      <label
        for={text}
        style={{
          fontFamily: "Roboto",
          fontSize: "15px",
        }}
      >
        {text}
      </label>
    </div>
  );
}
