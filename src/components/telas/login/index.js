import React, { useContext, useState } from "react";
import "./login.css";
import Footer from "../../footer";
import bgLarge from "../../../img/bg-large.jpg";
import { useHistory } from "react-router";
import isLogged from "../../../utils/auth";
import { getDatabase, ref, onValue, onChildAdded } from "firebase/database";
import { usuarioContext } from "../../../utils/contexto";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();
  const { user, setUser } = useContext(usuarioContext);
  const db = getDatabase();
  const usuariosRef = ref(db, "usuarios");
  isLogged() && history.push("/browse");

  const handleSubmit = (e) => {
    e.preventDefault();

    /* onValue(
      usuariosRef,
      (snapshot) => {
        console.log(snapshot.val());
        const usuarios = snapshot.val()
        const dados = Object.keys(usuarios)
        dados.forEach(id => {
          console.log(usuarios[id].email)
          
        });
        /* snapshot.val().forEach((usuario) => {
          if (usuario.email == email && usuario.senha == senha)
            setUser({ ...usuario, id: usuario.key });
        });
        return false;
        history.push("/browse"); 
      },
      {
        onlyOnce: true,
      }
    ); */
    onChildAdded(usuariosRef, (data) => {
      console.log(data.key)
    });
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
