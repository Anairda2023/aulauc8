const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'usbw',
    database:'dblocadora'
});

module.exports = connection;