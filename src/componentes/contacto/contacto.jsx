// eslint-disable-next-line no-unused-vars
import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const Contacto = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography variant="h6" gutterBottom>
        Contáctanos
      </Typography>
      <TextField
        fullWidth
        label="Nombre"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Correo Electrónico"
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Mensaje"
        margin="normal"
        multiline
        rows={4}
        variant="outlined"
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Enviar
      </Button>
    </Box>
  );
};

export default Contacto;