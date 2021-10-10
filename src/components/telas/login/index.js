import React, { useState } from "react";
import "./login.css";
import Footer from "../../footer";
import bgLarge from "../../../img/bg-large.jpg";
import { useHistory } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();
  console.log(email, senha);
  const handleSubmit = (e) => {
    e.preventDefault();
    
      history.push("/browse")
    
  };
  return (
    <>
      <div className="container">
        <div className="container-img">
          <img src={bgLarge} alt="background" />
        </div>
        <div className="container-login">
          <div className="form-login">
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                onChange={({ target }) => setEmail(target.value)}
              />
              <input
                placeholder="Senha"
                type="password"
                onChange={({ target }) => setSenha(target.value)}
              />
              <button>Entrar</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
