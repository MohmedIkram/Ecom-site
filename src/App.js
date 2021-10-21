import "./style.css";
import NavBarComp from "./components/NavbarComp.js";
import { Header } from "./components/Header.js";
import { CardComp } from "./components/CardComp.js";
import { Footer } from "./components/Footer.js";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [item, setItem] = useState([]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBarComp item={item} />
            <Header />
            <CardComp setItem={setItem} item={item} />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
