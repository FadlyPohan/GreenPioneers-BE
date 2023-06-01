const express = require('express');
const bodyParser = require('body-parser');
const tipsRoute = require('./routes/tipsRoute');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const port = 3030;
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(tipsRoute);

(async () => {
  try {
    await db.authenticate();
    console.log('Koneksi sukses terhubung.');
  } catch (error) {
    console.error('Tidak dapat terhubung ke database:', error);
  }
})();

app.listen(port, () => {
  console.log('Server berjalan...');
});
