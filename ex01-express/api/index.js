
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao Express de Denis');
});

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    res.json({ number: randomNumber });
});

const quotes = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Você não precisa ser brilhante, só precisa persistir.",
    "Acredite em si mesmo e tudo será possível.",
    "Não espere o momento perfeito. Crie-o.",
    "O único caminho para o sucesso é começar.",
    "Fracassar é apenas uma parada no caminho do sucesso.",
    "Seja o tipo de pessoa que faz as pessoas se sentirem melhor por estarem ao seu lado.",
    "Pequenas decisões levam a grandes mudanças.",
    "Você é capaz de mais do que imagina.",
    "O segredo do sucesso é fazer algo que ninguém mais quer fazer.",
    "Sonhe grande, mas comece pequeno.",
    "A coragem é fazer a coisa certa quando você sabe que vai doer.",
    "Nunca subestime o poder de uma atitude positiva.",
    "Cada dia é uma nova chance de ser melhor que ontem.",
    "O futuro pertence aos que acreditam na beleza de seus sonhos.",
    "Seja o exemplo que você quer ver no mundo.",
    "O maior obstáculo para o progresso é a inércia.",
    "Você não precisa ser perfeito. Só precisa ser constante."
];

app.get('/inspiration', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});