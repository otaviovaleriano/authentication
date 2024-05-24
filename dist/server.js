"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// static files from public folder
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// route path
app.use('/auth', userRoutes_1.default);
// app.get("/", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });
// Server host name and port
const HOST = 'localhost';
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running and listening on ${HOST}:${PORT}`);
});
