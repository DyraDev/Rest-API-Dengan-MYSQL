// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;
// Middleware
app.use(bodyParser.json());
// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // ganti dengan user MySQL Anda
  password: '', // ganti dengan password MySQL Anda
  database: 'testdb'
});
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});
// Rute API
const apiRouter = require('./routes/api')(db);
app.use('/api', apiRouter);
// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
module.exports = app;

