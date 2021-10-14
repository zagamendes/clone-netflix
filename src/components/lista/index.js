import React, { useContext, useState } from "react";
import "./lista.css";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { MyContext } from "../telas/browse";
const Lista = ({ title, content: { results: series } }) => {

  const sizePoster = window.innerWidth <768 ? 170 : 240;
  console.log(sizePoster);
  const tamanhoLista = sizePoster * series.length;
  const [coordenadaX, setCoordernadax] = useState(0);
  const { openVideo } = useContext(MyContext);
  const handleLeftArrow = () => {
    let x = coordenadaX + (window.innerWidth/2);
    x = x > 0 ? 0 : x;
    setCoordernadax(x);
  };
  const handleRightArrow = () => {
    
    let x = coordenadaX - (window.innerWidth/2);
    console.log("x", x, "screen", window.innerWidth);
    console.log(window.innerWidth - tamanhoLista);
    if (window.innerWidth - tamanhoLista > x) {
      x = window.innerWidth - tamanhoLista - 60;
    }
    setCoordernadax(x);
  };
  return (
    <div className="ctn-lista">
      <h2>{title}</h2>
      <div className="left-arrow" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50, color: "white" }} />
      </div>
      <div className="right-arrow" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50, color: "white" }} />
      </div>
      <div
        className="ctn-series"
        style={{ width: tamanhoLista, marginLeft: coordenadaX }}
      >
        {series.map((serie, key) => (
          <div
            className="ctn-capa-serie"
            key={key}
            onClick={() => openVideo(serie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`}
              alt={serie.original_name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lista;
