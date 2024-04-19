const express = require("express");
const path = require("path");
const app = express();
const exphbs = require("express-handlebars");
const PORT = 3000;

app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs"
  })
);

app.set("view engine", ".hbs");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log(`El servidor está inicializado en el puerto ${PORT}`);
});
app.use("/bootstrap_css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/bootstrap_js", express.static("./node_modules/bootstrap/dist/js"));
app.use("/jquery", express.static("./node_modules/jquery/dist"));
app.use("/public", express.static("./public"));

const datos = [
  { articulo: "Banana", precio: "1500", medida: "1", unidad: "kg" },
  { articulo: "Cebollas", precio: "100", medida: "1", unidad: "unidad" },
  { articulo: "Lechuga", precio: "500", medida: "1", unidad: "unidad" },
  { articulo: "Papas", precio: "2000", medida: "3", unidad: "kg" },
  { articulo: "Pimentón", precio: "900", medida: "1", unidad: "unidad" },
  { articulo: "Tomate", precio: "800", medida: "1", unidad: "kg" },
];

app.get("/", (req, res) => {
  res.render("home", { datos });
});
