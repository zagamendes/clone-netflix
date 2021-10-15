import "./signup.css";
import Header from "../home/header/";
import React, { useContext } from "react";
import { usuarioContext } from "../../../utils/contexto";
import app from "../../../utils/firebase-config";
import { getDatabase, ref, push, set } from "firebase/database";
import { useHistory } from "react-router-dom";
import isLogged from "../../../utils/auth";
const SignUp = () => {
  const { user, setUser } = useContext(usuarioContext);
  console.log(user);
  const history = useHistory();
  isLogged() && history.push("/browse");
  const db = getDatabase(app);
  const usuariosRef = ref(db, "usuarios");
  const novoUsuario = push(usuariosRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    set(novoUsuario, user);
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/browse");
  };
  return (
    <div className="signup-container">
      <Header />
      <div className="ctn-texto-form">
        <div className="ctn-texto">
          <h4>Crie uma senha para iniciar sua assinatura</h4>
          <p>
            Faltam só mais esse passo!
            <br /> Nós também detestamos formulários.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={user.email}
            onChange={({ target }) => setUser({ ...user, email: target.value })}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={user.senha}
            onChange={({ target }) => setUser({ ...user, senha: target.value })}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
