import express from 'express';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';  


const app = express();

app.set("views", path.join(fileURLToPath(import.meta.url), "..", "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Andro Tech', msg: 'Olá, mundo!' });
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
})