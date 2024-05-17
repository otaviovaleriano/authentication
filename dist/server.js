"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Serve static files from the "public" directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Default GET route
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
// app.get("/hi", (req: Request, res: Response) => {
//   res.send("Hello there! - Changed!");
// });
// Server host name and port
const HOST = 'localhost';
const PORT = 3000;
// Log statement to confirm server operation
app.listen(PORT, () => {
    console.log(`trial app listening on ${HOST}:${PORT}`);
});
