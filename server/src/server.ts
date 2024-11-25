import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import {Request, Response} from 'express';

// APP
const app = express();

// MIDDLEWARE

// server public folder
app.use(express.static("public"));

// get the current directory of the file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3001;

app.get('/', (_req: Request, res: Response) => {

  res.sendFile(path.join(__dirname, '..' , 'public', 'index.html'));

});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}...`)
})