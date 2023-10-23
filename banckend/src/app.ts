import express from 'express';
import cors from 'cors'; // Importe o módulo cors
import routes from './routes/task.routes';

const app = express();
app.use(cors()); // Use o middleware cors para habilitar CORS
app.use(express.json());
app.use(routes);

export default app;
