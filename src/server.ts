import express from "express";

// @types/express
const app = express();

/*
- GET    => Buscar uma informação
- POST   => Inserir (criar) uma informação
- PUT    => Alterar uma informação
- DELETE => Remover dado(s)
- PATCH  => Alterar uma informação específica
*/

app.get("/teste", (request, response) => {
  // Request  => Entrando
  // Response => Saindo
});

//http://localhost:3000
app.listen(3000, () => console.log("Server is running! Massa de mais!"));
