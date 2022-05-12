import express from 'express';
import './database/connection'; // Arquivo de conexão com o banco de dados
import routes from './routes';

const app = express();  // Cria a aplicação

app.use(express.json()); // Serve para fazer o express entender o formato json

// rota = conjunto
// recurso = users
// métodos HTTP = GET, POST, PUT, DELETE

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=tyson
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body Params: http://localhost:3333/users


app.use(routes);
app.listen(3333);  // Ouve a porta 3333