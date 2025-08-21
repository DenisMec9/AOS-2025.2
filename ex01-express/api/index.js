import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao Express de Denis'); 
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});