import { AppBar, Toolbar, Container } from "@material-ui/core";
import React from "react";
import { HomePage } from "./pages/home";
import "./styles.css";

export default function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <HomePage />
      </Container>
    </React.Fragment>
  );
}
