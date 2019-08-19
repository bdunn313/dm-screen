import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Characters from "./Characters";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Navigation />
        <Container maxWidth="xl" data-testid="base-app">
          <Route exact path="/" component={Home} />
          <Route path="/characters" component={Characters} />
        </Container>
      </Router>
    </>
  );
}

export default App;
