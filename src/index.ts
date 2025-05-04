import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

app.get('/posts', async (req: Request, res: Response) => {
    try {
        res.json({ message: 'Rota para listar posts' });
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});