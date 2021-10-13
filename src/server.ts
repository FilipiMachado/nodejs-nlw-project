import express from "express";

// @types/express
const app = express();

/*
    Methods:
- GET    => Buscar uma informação
- POST   => Inserir (criar) uma informação
- PUT    => Alterar uma informação
- DELETE => Remover dado(s)
- PATCH  => Alterar uma informação específica
*/

/* 
    Tipos de Parâmetros
- Routes Params => http://localhost:3000/produtos/ 4184847842 (id)
- Query Params  => http://localhost:3000/produtos/?name=telado&description=tecladonice&...

- Body Params (POST, PUT e PATCH)   => {
    "name": "teclado",
    "description": "teclado nice"
}
*/

app.get("/teste/{id}", (request, response) => {
  // Request  => Entrando
  // Response => Saindo
  return response.send("Hello Bagual!");
});

app.post("/teste-post", (request, response) => {
  return response.send("Hello bagual com post method!");
});

//http://localhost:3000
app.listen(3000, () => console.log("Server is running! Massa de mais!"));
