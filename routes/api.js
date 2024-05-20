//routes/api.js
const express = require('express');
const router = express.Router();
module.exports = function(db) {
  // Ambil semua pengguna
  router.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(results);
    });
  });
  
  // Tambah pengguna baru
  router.post('/users', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, results) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(201).json({ id: results.insertId, name, email });
    });
  });
  
  // Ambil pengguna berdasarkan ID
  router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(results[0]);
    });
  });
  
  // Perbarui pengguna berdasarkan ID
  router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(sql, [name, email, id], (err, results) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(results);
    });
  });
  
  // Hapus pengguna berdasarkan ID
  router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(results);
    });
  });
  
  return router;
};

