import BeerForProductList from "./BeerForProductList";
import { useState } from "react";
import Button from "./Button";

export default function ProductView({ addToBasket, beerTypes, taps }) {
  const [popupInfo, setPopupInfo] = useState([{ label: "", content: "" }]);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  function togglePopup(info) {
    setPopupIsOpen(!popupIsOpen);
    if (info !== undefined) {
      setPopupInfo([
        { label: "Name: ", content: info.name },
        { label: "Category: ", content: info.category },
        { label: "Alcohol: ", content: info.alc },
        { label: "Aroma: ", content: info.description.aroma },
        { label: "Appearance: ", content: info.description.appearance },
        { label: "Flavor: ", content: info.description.flavor },
        { label: "Mouthfeel: ", content: info.description.mouthfeel },
        {
          label: "Overall Impression: ",
          content: info.description.overallImpression,
        },
      ]);
    } else {
      setPopupInfo([{ label: "no", content: "no" }]);
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridGap: "20px",
        width: "100%",
        margin: "auto",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        maxWidth: "1000px",
      }}
    >
      {beerTypes.map((product) => (
        <BeerForProductList
          info={product}
          key={product.name}
          addToBasket={addToBasket}
          taps={taps}
          togglePopup={togglePopup}
        ></BeerForProductList>
      ))}
      {popupIsOpen ? (
        <section
          className="popup"
          style={{
            position: "fixed",
            backgroundColor: "#00000090",
            height: "100vh",
            width: "100vw",
            top: "0",
            left: "0",
            zIndex: "4",
            padding: "15vh 15vw",
          }}
        >
          <article
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "20px",
              height: "100%",
              overflowY: "scroll",
            }}
          >
            <Button
              style={{
                position: "fixed",
                top: "14vh",
                left: "82vw",
                backgroundColor: "black",
                color: "white",
                border: "solid white 1px",
                padding: "5px",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
              }}
              text="X"
              onClick={(e) => togglePopup()}
            ></Button>

            {popupInfo.map((info) => (
              <div
                key={info.label}
                style={{
                  padding: "5px 0",
                }}
              >
                <h2
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {info.label}
                </h2>
                <p>{info.content}</p>
              </div>
            ))}
          </article>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}
