// eslint-disable-next-line no-unused-vars
import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Servicios from "./componentes/servicios/servicios";
import Contacto from "./componentes/contacto/contacto";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Taller de indumentaria y Cortinas para hoteles</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Servicios />
        </Box>
        <Box my={4}>
          <Contacto />
        </Box>
      </Container>
    </>
  );
}

export default App;