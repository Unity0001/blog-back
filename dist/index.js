"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const main_1 = __importDefault(require("./routes/main"));
dotenv_1.default.config();
console.log("MONGO_URI:", process.env.MONGO_URI);
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || '3000', 10);
app.use(express_1.default.json());
app.use('/api', main_1.default);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
//# sourceMappingURL=index.js.map