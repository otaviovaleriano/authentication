import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import path from "path";

const app: Express = express();

// static files from public folder
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// route path
app.use('/auth', userRoutes);


// app.get("/", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });



// Server host name and port
const HOST = 'localhost';
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running and listening on ${HOST}:${PORT}`);
});