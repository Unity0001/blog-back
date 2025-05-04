"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || '3000', 10);
app.use(express_1.default.json());
const mongo_URI = process.env.DATABASE_URL;
if (!mongo_URI) {
    console.error('A variável de ambiente DATABASE_URL não está definida.');
    process.exit(1);
}
mongoose_1.default.connect(mongo_URI)
    .then(() => console.log('MongoDB conectado'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
app.get('/posts', async (req, res) => {
    try {
        res.json({ message: 'Rota para listar posts' });
    }
    catch (error) {
        console.error('Erro ao buscar posts:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
//# sourceMappingURL=index.js.map