const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/encode', (req, res) => {
  const {message, password} = req.body;
  const encodedPassword = Vigenere.Cipher(password).crypt(message);
  res.send({encoded: encodedPassword});
});

app.post('/decode', (req, res) => {
  const {message, password} = req.body;
  const decodedPassword = Vigenere.Decipher(password).crypt(message);
  res.send({decoded: decodedPassword});
});

app.listen(port, () => {
  console.log('We are live on ' + port);
})
