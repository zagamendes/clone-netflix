import { useEffect } from "react";
import getContent from "./utils/tmdb";
import Home from "./components/telas/home";
import Login from "./components/telas/login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const loadContent = async () => {
    const series = await getContent();
    console.log(series);
  };
  useEffect(() => {
    loadContent();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={Login} />
      </Switch>
      </Router>
    
  );
}

export default App;
