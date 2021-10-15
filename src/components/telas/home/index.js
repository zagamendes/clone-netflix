import React, { useContext } from "react";
import "./home.css";
import bgLarge from "../../../img/bg-large.jpg";
import bgMedium from "../../../img/bg-medium.jpg";
import bgSmall from "../../../img/bg-small.jpg";
import tv from "../../../img/tv.png";
import baixeSeries from "../../../img/baixe-series.jpg";
import assistaQuandoQuiser from "../../../img/assista-quando-quiser.png";
import Header from "./header";
import Footer from "../../footer";
import Faq from "../../faq";
import NavigateNextIcon from "@material-ui/icons//NavigateNext";
import { usuarioContext } from "../../../utils/contexto";
import { useHistory } from "react-router-dom";
import isLogged from "../../../utils/auth"
const Home = () => {
  const { user, setUser } = useContext(usuarioContext);
  const history = useHistory();
  isLogged() && history.push("/browse")
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/signup");
  };
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="ctn-img-form">
          <div className="ctn-background">
            <div className="ctn-background-img">
              <img
                srcSet={`${bgLarge} 1800w, ${bgMedium} 1500w, ${bgSmall} 1000w`}
                alt="background"
              />
            </div>
          </div>
          <div className="ctn-texto-form">
            <div className="filmes-sem-limites">
              <h1>Filmes, séries e muito mais. Sem limites.</h1>
              <p>Assista onde quiser. Cancele quando quiser.</p>
              <p>
                Pronto para assistir? Informe seu email para criar ou reiniciar
                sua assinatura.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Seu email"
                onChange={({ target }) =>
                  setUser({ ...user, email: target.value })
                }
              />
              <button>
                Vamos lá <NavigateNextIcon />{" "}
              </button>
            </form>
          </div>
        </div>
        <div className="container-beneficios">
          <section className="aproveite-na-tv">
            <div className="container">
              <div className="ctn-texto">
                <h3>Aproveite na TV.</h3>
                <p>
                  Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  aparelhos de Blu-ray e outros dispositivos.
                </p>
              </div>
              <div className="ctn-img">
                <img src={tv} alt="foto" />
                <video autoPlay playsInline muted loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </section>
          <section className="aproveite-na-tv">
            <div className="container">
              <div className="ctn-img">
                <img src={baixeSeries} alt="foto" />
              </div>
              <div className="ctn-texto">
                <h3>Baixe séries para assistir offline.</h3>
                <p>
                  Salve seus títulos favoritos e sempre tenha algo para
                  assistir.
                </p>
              </div>
            </div>
          </section>
          <section className="aproveite-na-tv">
            <div className="container">
              <div className="ctn-texto">
                <h3>Assista quando quiser.</h3>
                <p>
                  Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  aparelhos de Blu-ray e outros dispositivos.
                </p>
              </div>
              <div className="ctn-img">
                <img src={assistaQuandoQuiser} alt="foto" />
                <video autoPlay playsInline muted loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </section>
        </div>
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default Home;
