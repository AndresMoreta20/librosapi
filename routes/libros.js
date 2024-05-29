const express = require("express");
const router = express.Router();

const librosData = [
  {
    _id: 2001,
    titulo: "Huasipungo",
    autor: "Jorge Icaza",
    precio: 15.99,
    precioAnterior: 18.99,
    descripcion:
      "Una de las novelas más importantes de la literatura ecuatoriana que narra la opresión y explotación de los indígenas.",
    categoria: "novela",
    imagen: "https://i.ibb.co/3y5P0d2/huasipungo.jpg",
    esNuevo: true,
    editorial: "Editorial Casa de la Cultura Ecuatoriana",
  },
  {
    _id: 2002,
    titulo: "La tigra",
    autor: "José de la Cuadra",
    precio: 12.99,
    precioAnterior: 14.99,
    descripcion:
      "Una obra que refleja las costumbres y problemas sociales de la costa ecuatoriana.",
    categoria: "novela",
    imagen: "https://i.ibb.co/qm3hJ8s/la-tigra.jpg",
    esNuevo: true,
    editorial: "Editorial Universitaria",
  },
  {
    _id: 2003,
    titulo: "El éxodo de Yangana",
    autor: "Ángel Felicísimo Rojas",
    precio: 14.99,
    precioAnterior: 16.99,
    descripcion:
      "Novela que describe la migración de los campesinos ecuatorianos y sus luchas.",
    categoria: "novela",
    imagen: "https://i.ibb.co/6ZfXggN/el-exodo-de-yangana.jpg",
    esNuevo: true,
    editorial: "Editorial Casa de la Cultura Ecuatoriana",
  },
  {
    _id: 2004,
    titulo: "Los crímenes de Bartow",
    autor: "Óscar Vela",
    precio: 12.0,
    precioAnterior: null,
    descripcion:
      "Nelson Serrano Sáenz es el prisionero más longevo del corredor de la muerte en los Estados Unidos. Fue acusado de un crimen cuádruple en 1997 en Bartow, Florida. En 2002, fue secuestrado en Ecuador y trasladado a Miami. Fue juzgado y sentenciado sin pruebas a cuatro penas de muerte. Nuevas evidencias han surgido, demostrando su posible inocencia.",
    categoria: "Literatura Ecuatoriana",
    imagen: "https://i.ibb.co/YZ8k3Bs/los-crimenes-de-bartow.jpg",
    esNuevo: true,
    editorial: "Planeta",
  },
  {
    _id: 2005,
    titulo: "Sacrificios Humanos",
    autor: "María Fernanda Ampuero",
    precio: 18.99,
    precioAnterior: 21.99,
    descripcion:
      "Todos podemos ser el demonio del otro. Todos podemos ser el sacrificio humano de ese otro. María Fernanda Ampuero nos empuja a un universo húmedo, podrido y hostil.",
    categoria: "Cuento",
    imagen: "https://i.ibb.co/dtQf0qM/sacrificios-humanos.jpg",
    esNuevo: true,
    editorial: "Páginas de Espuma",
  },
  {
    _id: 2006,
    titulo: "Necesito saber hoy de tu vida",
    autor: "Sabrina Duque",
    precio: 15.0,
    precioAnterior: null,
    descripcion:
      "Una recopilación de nueve perfiles de personajes brasileños y portugueses que han impactado a la sociedad. Los textos nos llevan de Brasil a Portugal, mostrando las vivencias de grandes personajes del fútbol, exmillonarios y figuras influyentes.",
    categoria: "Perfiles",
    imagen: "https://i.ibb.co/8P7Kc3v/necesito-saber-hoy-de-tu-vida.jpg",
    esNuevo: true,
    editorial: "Páginas de Espuma",
  },
];

router.get("/libros", (req, res) => {
  res.send(librosData);
});

router.get("/libros/:id", (req, res) => {
  const libroId = parseInt(req.params.id);
  const libro = librosData.find((item) => item._id === libroId);

  if (!libro) {
    return res.status(404).json({ mensaje: "Libro no encontrado" });
  }
  res.json(libro);
});

module.exports = router;
