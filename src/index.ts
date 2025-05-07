import express from 'express';
import dotenv from 'dotenv';
import router from './routes/main';

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});