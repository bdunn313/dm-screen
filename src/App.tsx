import React from "react";
import { Typography, Container } from "@material-ui/core";

function App() {
  return (
    <Container data-testid="base-app">
      <header>
        <Typography variant="h1">DM Screen</Typography>
      </header>
      <main>
        <Typography variant="body1">
          Brad's personal DM screen for all the wonderful things.
        </Typography>
      </main>
    </Container>
  );
}

export default App;
