const express = require("express");
const router = express.Router();

const autoresData = [
  {
    _id: 3001,
    nombre: "Jorge Icaza",
    nacionalidad: "Ecuatoriano",
    libros: ["Huasipungo"],
    descripcion:
      "Jorge Icaza Coronel fue un novelista ecuatoriano, conocido principalmente por su obra 'Huasipungo', una denuncia social sobre la situación de los indígenas en Ecuador.",
    imagen: "https://i.ibb.co/z2LqFb4/jorge-icaza.jpg",
  },
  {
    _id: 3002,
    nombre: "José de la Cuadra",
    nacionalidad: "Ecuatoriano",
    libros: ["La tigra"],
    descripcion:
      "José de la Cuadra fue un escritor ecuatoriano, miembro del grupo de Guayaquil, y conocido por sus obras que reflejan la realidad social y cultural de la costa ecuatoriana.",
    imagen: "https://i.ibb.co/ydsQDFb/jose-de-la-cuadra.jpg",
  },
  {
    _id: 3003,
    nombre: "Ángel Felicísimo Rojas",
    nacionalidad: "Ecuatoriano",
    libros: ["El éxodo de Yangana"],
    descripcion:
      "Ángel Felicísimo Rojas fue un escritor ecuatoriano, reconocido por su obra 'El éxodo de Yangana', que aborda los temas de la migración y las luchas sociales de los campesinos.",
    imagen: "https://i.ibb.co/R06hKkS/angel-felicisimo-rojas.jpg",
  },
  {
    _id: 3004,
    nombre: "Óscar Vela",
    nacionalidad: "Ecuatoriano",
    libros: ["Los crímenes de Bartow"],
    descripcion:
      "Óscar Vela es un escritor y abogado ecuatoriano, conocido por su obra 'Los crímenes de Bartow'. Ha recibido el Premio Joaquín Gallegos Lara en 2011 y 2015.",
    imagen: "https://i.ibb.co/4YtFgqw/oscar-vela.jpg",
  },
  {
    _id: 3005,
    nombre: "María Fernanda Ampuero",
    nacionalidad: "Ecuatoriana",
    libros: ["Sacrificios Humanos"],
    descripcion:
      "María Fernanda Ampuero es una escritora, periodista y profesora ecuatoriana, conocida por sus cuentos y ensayos. Ha recibido el Premio Joaquín Gallegos Lara en 2018.",
    imagen: "https://i.ibb.co/VmLrZ7Z/maria-fernanda-ampuero.jpg",
  },
  {
    _id: 3006,
    nombre: "Sabrina Duque",
    nacionalidad: "Ecuatoriana",
    libros: ["Necesito saber hoy de tu vida"],
    descripcion:
      "Sabrina Duque es una periodista, cronista y traductora ecuatoriana. Su libro 'Necesito saber hoy de tu vida' es una recopilación de perfiles de personajes brasileños y portugueses.",
    imagen: "https://i.ibb.co/PmJ7d2J/sabrina-duque.jpg",
  },
];

router.get("/autores", (req, res) => {
  res.send(autoresData);
});

router.get("/autores/:id", (req, res) => {
  const autorId = parseInt(req.params.id);
  const autor = autoresData.find((item) => item._id === autorId);

  if (!autor) {
    return res.status(404).json({ mensaje: "Autor no encontrado" });
  }
  res.json(autor);
});

module.exports = router;
