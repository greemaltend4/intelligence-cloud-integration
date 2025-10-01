const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get('/', (req, res) => {
  res.send('Bienvenue dans l\'Intelligence Cloud Integration!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d\'exécution sur le port ${PORT}`);
});
