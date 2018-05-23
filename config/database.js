// config/database.js
/*
module.exports = {
    'connection': {
        'host': 'localhost',
        'user': 'testi',
        'password': 'testipassu',
        'database': 'mydb',
        'port': 3306
    }
};
*/

var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'testi',
    password : 'testipassu',
    database : 'mydb',
    port : 3306
});

module.exports=connection;