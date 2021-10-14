import React from "react";
import "./faq.css";
import { ReactComponent as PlusIcon } from "../../img/plus-icon.svg";
const Faq = () => {
  const toggleQuestion = ({ target }) => {
    if (target.closest(".pergunta").classList.contains("pergunta-aberta")) {
      target.closest(".pergunta").classList.remove("pergunta-aberta");
      return;
    }
    target.closest(".pergunta").classList.add("pergunta-aberta");
  };
  return (
    <section className="faq">
      <div className="container">
        <h2>Perguntas frequentes</h2>
        <div className="container-perguntas">
          <div className="pergunta">
            <div className="ctn-titulo-icon" onClick={toggleQuestion}>
              <h3 className="titulo-pergunta">O que é netflix?</h3>
              <button className="icon">
                <PlusIcon />
              </button>
            </div>
            <p className="resposta">
              A Netflix é um serviço de transmissão online que oferece uma ampla
              variedade de séries, filmes e documentários premiados em milhares
              de aparelhos conectados à internet. <br /> <br /> Você pode
              assistir a quantos filmes e séries quiser, quando e onde quiser,
              sem comerciais – tudo por um preço mensal bem acessível. Aqui você
              sempre encontra novidades. A cada semana, adicionamos novas séries
              e filmes.
            </p>
          </div>
          <div className="pergunta">
            <div className="ctn-titulo-icon" onClick={toggleQuestion}>
              <h3 className="titulo-pergunta">Quanto custa a Netflix?</h3>
              <button className="icon">
                <PlusIcon />
              </button>
            </div>
            <p className="resposta">
              Assista à Netflix no seu celular, tablet, Smart TV, notebook ou
              aparelho de streaming por uma taxa mensal única. Os planos variam
              de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras.
            </p>
          </div>
          <div className="pergunta">
            <div className="ctn-titulo-icon" onClick={toggleQuestion}>
              <h3 className="titulo-pergunta">Onde posso assistir?</h3>
              <button className="icon">
                <PlusIcon />
              </button>
            </div>
            <p className="resposta">
              Assista onde quiser, quando quiser. Faça login com sua conta
              Netflix em netflix.com para começar a assistir no computador ou em
              qualquer aparelho conectado à Internet compatível com o aplicativo
              Netflix, como Smart TVs, smartphones, tablets, aparelhos de
              streaming e videogames. <br /> <br /> Você também pode baixar a
              sua série favorita com o aplicativo Netflix para iOS, Android ou
              Windows 10. Use downloads para levar a Netflix para onde quiser
              sem precisar de conexão com a Internet. Leve a Netflix com você
              para qualquer lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
