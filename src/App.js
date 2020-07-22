import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/layout";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
