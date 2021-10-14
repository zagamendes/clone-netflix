import React, { useState, useEffect } from "react";
import Lista from "../../lista";
import getContent, { getSerieInfo, getVideo } from "../../../utils/tmdb";
import "./browse.css";
import FeaturedSerie from "../../serie em destaque";
import Header from "../../header";
import Footer from "../../footer";
import Video from "../../video";
export const MyContext = React.createContext("");
const Browse = () => {
  const [lista, setLista] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);
  const [featuredSerie, setFeaturedSerie] = useState("");
  const [videoInfo, setVideoInfo] = useState({});

  const loadContent = async () => {
    const series = await getContent();
    setLista(series);
    const randomId = Math.floor(
      Math.random() * (series[0].content.results.length - 1)
    );
    const chosenSerie = series[0].content.results[randomId];
    const { data } = await getSerieInfo(chosenSerie.id);
    setFeaturedSerie(data);
  };
  useEffect(() => {
    loadContent();
    window.addEventListener("scroll", ({ target }) => {
      if (window.scrollY > 10) setBlackHeader(true);
      else setBlackHeader(false);
    });
  }, []);
  const openVideo = async (serie) => {
    const tipo = serie.media_type ? "movie" : "tv";
    const {
      data: { results },
    } = await getVideo(serie.id, tipo);
    if (results.length != 0) {
      const randomIndex = Math.floor(Math.random() * (results.length - 1));
      setVideoInfo(results[randomIndex]);
    }
  };
  return !featuredSerie ? (
    <div className="browse-loading">
      <img src="https://www.rchandru.com/images/portfolio/loading.gif" />
    </div>
  ) : (
    <div className="ctn-browse">
      <MyContext.Provider
        value={{ openVideo: openVideo, setVideoInfo: setVideoInfo }}
      >
        {videoInfo.key ? <Video id={videoInfo.key} /> : ""}
        <Header isBlack={blackHeader} />
        <FeaturedSerie serie={featuredSerie} />
        {lista.map((item, key) => (
          <Lista title={item.title} content={item.content} key={key} />
        ))}
      </MyContext.Provider>
      <Footer />
    </div>
  );
};

export default Browse;
