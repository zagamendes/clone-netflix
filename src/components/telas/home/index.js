import React from "react";
import "./home.css";
import bgLarge from "../../../img/bg-large.jpg";
import bgMedium from "../../../img/bg-medium.jpg";
import bgSmall from "../../../img/bg-small.jpg";
import tv from "../../../img/tv.png";
import baixeSeries from "../../../img/baixe-series.jpg";
import assistaQuandoQuiser from "../../../img/assista-quando-quiser.png";
import { ReactComponent as PlusIcon } from "../../../img/plus-icon.svg";
import Header from "../../header";
import Footer from "../../footer";

const Home = () => {
  const toggleQuestion = ({ target }) => {
    if (target.parentElement.classList.contains("pergunta-aberta")) {
      target.parentElement.classList.remove("pergunta-aberta");
      return;
    }
    target.parentElement.classList.add("pergunta-aberta");
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
        <section className="faq">
          <div className="container">
            <h2>Perguntas frequentes</h2>
            <div className="container-perguntas">
              <div className="pergunta" onClick={toggleQuestion}>
                <div className="ctn-titulo-icon">
                  <h3 className="titulo-pergunta">O que é netflix?</h3>
                  <button className="icon">
                    <PlusIcon />
                  </button>
                </div>
                <p className="resposta">
                  A Netflix é um serviço de transmissão online que oferece uma
                  ampla variedade de séries, filmes e documentários premiados em
                  milhares de aparelhos conectados à internet. <br /> <br />{" "}
                  Você pode assistir a quantos filmes e séries quiser, quando e
                  onde quiser, sem comerciais – tudo por um preço mensal bem
                  acessível. Aqui você sempre encontra novidades. A cada semana,
                  adicionamos novas séries e filmes.
                </p>
              </div>
              <div className="pergunta" onClick={toggleQuestion}>
                <div className="ctn-titulo-icon">
                  <h3 className="titulo-pergunta">Quanto custa a Netflix?</h3>
                  <button className="icon">
                    <PlusIcon />
                  </button>
                </div>
                <p className="resposta">
                  Assista à Netflix no seu celular, tablet, Smart TV, notebook
                  ou aparelho de streaming por uma taxa mensal única. Os planos
                  variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas
                  extras.
                </p>
              </div>
              <div className="pergunta" onClick={toggleQuestion}>
                <div className="ctn-titulo-icon">
                  <h3 className="titulo-pergunta">Onde posso assistir?</h3>
                  <button className="icon">
                    <PlusIcon />
                  </button>
                </div>
                <p className="resposta">
                  Assista onde quiser, quando quiser. Faça login com sua conta
                  Netflix em netflix.com para começar a assistir no computador
                  ou em qualquer aparelho conectado à Internet compatível com o
                  aplicativo Netflix, como Smart TVs, smartphones, tablets,
                  aparelhos de streaming e videogames. <br /> <br /> Você também
                  pode baixar a sua série favorita com o aplicativo Netflix para
                  iOS, Android ou Windows 10. Use downloads para levar a Netflix
                  para onde quiser sem precisar de conexão com a Internet. Leve
                  a Netflix com você para qualquer lugar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
