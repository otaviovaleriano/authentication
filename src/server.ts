import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Default GET route
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
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