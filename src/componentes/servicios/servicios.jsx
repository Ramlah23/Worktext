// eslint-disable-next-line no-unused-vars
import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import hospitalImage from '../../assets/ambos.jpeg';
import hotelImage from '../../assets/cortinas.webp';
import '../servicios/Servicios.css'; // Asegúrate de importar el archivo CSS

const servicios = [
  {
    titulo: "Indumentaria para Personal de Hospitales",
    descripcion: "Confeccionamos uniformes de alta calidad para el personal médico y hospitalario.",
    imagen: hospitalImage,
  },
  {
    titulo: "Cortinas para Hoteles",
    descripcion: "Diseño y confección de cortinas a medida para hoteles y otros espacios.",
    imagen: hotelImage,
  },
];

const Servicios = () => {
  return (
    <Grid container spacing={4}>
      {servicios.map((servicio, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card>
            <CardMedia
              component="img"
              alt={servicio.titulo}
              className="cardImage" // Aplicar la clase CSS
              image={servicio.imagen}
              sx={{
                height: 300, // Altura específica para la imagen
                width: '100%', // Ancho al 100% del contenedor
                objectFit: 'contain', // Asegura que la imagen se ajuste sin recortarse
              }}
            />
            <CardContent>
              <Typography variant="h5">{servicio.titulo}</Typography>
              <Typography variant="body2" color="text.secondary">
                {servicio.descripcion}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Servicios;