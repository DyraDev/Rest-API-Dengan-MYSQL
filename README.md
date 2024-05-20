# REST API MySQL dengan Node.js

Repositori ini berisi REST API sederhana yang dibangun dengan Node.js dan MySQL. API ini mendukung operasi CRUD (Create, Read, Update, Delete) dasar untuk tabel `users`.

## Prasyarat

- [Node.js](https://nodejs.org/) (versi 12 atau lebih tinggi)
- [MySQL](https://www.mysql.com/) (versi 5.7 atau lebih tinggi)

## Instalasi

1. **Clone repositori ini**:
   ```bash
   git clone https://github.com/yourusername/my-api.git
   cd my-api
   ```
2. **Install dependensi yang diperlukan**:
   ```bash
   npm install
   ```
3. **Atur database MySQL**:

-  Jalankan server MySQL Anda.
-  Buat database bernama testdb dan tabel users dengan menjalankan perintah SQL berikut:
   ```bash
   CREATE DATABASE testdb;

USE testdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
   ```
4. **Perbarui detail koneksi MySQL di 'server.js'**:
   ```bash
   const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username', // ganti dengan username MySQL Anda
  password: 'your_mysql_password', // ganti dengan password MySQL Anda
  database: 'testdb'
});
   ```

## Menjalankan Server Secara Lokal
   **Jalankan server dengan perintah**:
     ```bash
     node server.js
     ```
Server akan berjalan di **http://localhost:3000**.

## API Endpoints

### GET /api/users

- **Deskripsi**: Mendapatkan semua item.
- **Request**: `GET /api/users`
- **Response**:
    ```json
[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
    },
]
    ```

### GET /api/users/:id

- **Deskripsi**: Mendapatkan pengguna berdasarkan ID.
- **Request**: `GET /api/users/:id`
- **Response**:
    ```json
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
}
    ```

### POST /api/users

- **Deskripsi**: Menambahkan pengguna baru.
- **Request**: `POST /api/users`
    - Headers: `Content-Type: application/json`
    - Body:
        ```json
{
    "name": "Jane Doe",
    "email": "jane@example.com"
}
        ```
- **Response**:
    ```json
{
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@example.com"
}
    ```

### DELETE /api/users/:id

- **Deskripsi**: Menghapus pengguna berdasarkan ID.
- **Request**: `DELETE /api/users/:id`
- **Response**:
    ```json
{
    "affectedRows": 1
}
    ```

### PUT /api/users/:id

- **Deskripsi**: Memperbarui pengguna berdasarkan ID.
- **Request**: `PUT /api/users/:id`
    - Headers: `Content-Type: application/json`
    - Body:
        ```json
{
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
}
        ```
- **Response**:
    ```json
{
    "affectedRows": 1
}
    ```

## Menguji API

### Menggunakan Postman (Gunakan Replit, Heroku, atau Cloudflare Tunnel untuk mendapatkan URL Public)

1. **GET Semua Users**:
    - URL: `http://localhost:3000/api/users`
    - Method: `GET`

2. **GET Users Berdasarkan ID**:
    - URL: `http://localhost:3000/api/users/1`
    - Method: `GET`

3. **POST Users Baru**:
    - URL: `http://localhost:3000/api/users`
    - Method: `POST`
    - Headers: `Content-Type: application/json`
    - Body:
        ```json
        {
          "name": "User 3"
        }
        ```

4. **DELETE Users Berdasarkan ID**:
    - URL: `http://localhost:3000/api/users/1`
    - Method: `DELETE`
  
5. **PUT Update Users Berdasarkan ID**:
    - URL: `http://localhost:3000/api/users/1`
    - Method: `PUT`
    - Headers: `Content-Type: application/json`
    - Body:
        ```json
        {
          "name": "User 3 Updated"
        }
        ```

### Menggunakan cURL

1. **GET Semua Users**:
    ```bash
    curl -X GET http://localhost:3000/api/users
    ```

2. **POST Users Baru**:
    ```bash
    curl -X POST http://localhost:3000/api/users \
    -H "Content-Type: application/json" \
    -d '{"name": "User 3"}'
    ```

3. **GET Users Berdasarkan ID**:
    ```bash
    curl -X GET http://localhost:3000/api/users/1
    ```

4. **DELETE Users Berdasarkan ID**:
    ```bash
    curl -X DELETE http://localhost:3000/api/users/1
    ```

5. **PUT Update Users Berdasarkan ID**:
    ```bash
    curl -X PUT http://localhost:3000/api/users/1 \
    -H "Content-Type: application/json" \
    -d '{"name": "User 3 Updated"}'
    ```

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).


