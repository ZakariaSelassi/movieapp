const mysql = require('mysql');
const config = require('../../config/dbConfig')
const dbConnection = () => {
    const db = mysql.createConnection(config.db);
    db.connect((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to database');
        }
    });
    return db;
}

module.exports = {dbConnection};