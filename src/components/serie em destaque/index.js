import React, { useContext } from "react";
import { MyContext } from "../telas/browse";
import "./serie em destaque.css";
const FeaturedSerie = ({ serie }) => {
  const generos = [];
  serie.genres.forEach((genero) => {
    generos.push(genero.name);
  });
  const { openVideo } = useContext(MyContext);

  return (
    <section
      className="featured-serie"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${serie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-wrapper">
            <div className="featured-nome">
              <h2>{serie.name}</h2>
            </div>
            <div className="featured-info">
              <div className="featured-points">{serie.vote_average} pontos</div>
              <div className="featured-ano">
                {new Date(serie.first_air_date).getFullYear()}
              </div>
              <div className="featured-temporadas">
                {serie.number_of_seasons} temporada
                {serie.number_of_seasons > 1 ? "s" : ""}
              </div>
            </div>
            <div className="featured-descricao">
              {window.innerWidth < 768
                ? serie.overview.substring(0, 150) + "..."
                : serie.overview.substring(0, 220) + "..."}
            </div>
            <div className="featured-buttons">
              <button className="btn-assistir" onClick={() => openVideo(serie)}>
                Assistir
              </button>
              <button className="btn-minha-lista">Minha Lista</button>
            </div>
            <div className="featured-generos">{generos.join(", ")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSerie;
