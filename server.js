import express from 'express'; // Importa o módulo Express para criar um servidor web
import routes from './src/config/routes/postsRoutes.js';

const app = express(); // Cria uma instância do Express para iniciar o servidor
app.use(express.static("uploads"))
routes(app)


app.listen(3000, () => { // Inicia o servidor na porta 3000
  console.log('Servidor escutando...'); // Mensagem de log indicando que o servidor está ativo
});



