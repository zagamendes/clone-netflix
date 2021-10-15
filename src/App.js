import Home from "./components/telas/home";
import Login from "./components/telas/login";
import SignUp from "./components/telas/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Browse from "./components/telas/browse/";
import UsuarioContextProvider from "./utils/contexto"

function App() {
  return (
    <Router>
      <Switch>
        <UsuarioContextProvider>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/browse" component={Browse} />
          <Route path="/signup" component={SignUp} />
        </UsuarioContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
