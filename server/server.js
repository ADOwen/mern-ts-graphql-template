import express from 'express'

// DEPENDENCIES
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}...`)
})