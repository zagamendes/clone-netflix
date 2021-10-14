import Home from "./components/telas/home";
import Login from "./components/telas/login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Browse from "./components/telas/browse/";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={Login} />
        <Route  path="/browse" component={Browse} />
      </Switch>
      </Router>
    
  );
}

export default App;
