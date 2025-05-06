// app.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ExpressRequest, ExpressResponse } from './core/adapter/ExpressAdapter';
import { CategoriaController } from './controllers/categoria_controller';


dotenv.config();

const app = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

const mongo_URI: string | undefined = process.env.DATABASE_URL;

if (!mongo_URI) {
    console.error('A variável de ambiente DATABASE_URL não está definida.');
    process.exit(1);
}

mongoose.connect(mongo_URI)
    .then(() => console.log('MongoDB conectado'))
    .catch((err: any) => console.error('Erro ao conectar ao MongoDB:', err));

app.post('/categorias', (req, res) => {
    const adaptedReq = new ExpressRequest(req);
    const adaptedRes = new ExpressResponse(res);
    CategoriaController.create(adaptedReq, adaptedRes);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
