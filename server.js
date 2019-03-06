const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;


app.get('/', (req, res) => {
  res.send('Hi, go to /encode or /decode');
});

app.get('/encode', (req, res) => {
  res.send('Hi, add slash and some word to encode');
});

app.get('/decode', (req, res) => {
  res.send('Hi, add slash and some word to decode');
});

app.get('/encode/:password', (req, res) => {
  const encodedPassword = Vigenere.Cipher('password').crypt(req.params.password);
  res.send(encodedPassword);
});

app.get('/decode/:password', (req, res) => {
  const decodedPassword = Vigenere.Decipher('password').crypt(req.params.password);
  res.send(decodedPassword);
});

app.listen(port, () => {
  console.log('We are live on ' + port);
})

