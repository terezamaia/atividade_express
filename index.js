const express = require('express');
const app = express();

// Variáveis para armazenar o contador e as contagens das rotas
let contador = 0;
let incrementar1Count = 0;
let incrementar5Count = 0;

// Rota /contador
app.get('/contador', (req, res) => {
  res.json({ contador });
});

// Rota /incrementar1
app.get('/incrementar1', (req, res) => {
  contador += 1;
  incrementar1Count += 1;
  res.json({ contador });
});

// Rota /incrementar5
app.get('/incrementar5', (req, res) => {
  contador += 5;
  incrementar5Count += 1;
  res.json({ contador });
});

// Rota /relatorio
app.get('/relatorio', (req, res) => {
  res.json({
    contador,
    incrementar1Count,
    incrementar5Count
  });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
