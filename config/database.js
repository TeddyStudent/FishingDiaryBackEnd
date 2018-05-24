var mysql = require('mysql');

var connection = mysql.createConnection ({
    host : 'localhost',
    user : 'testi',
    password : 'testipassu',
    database : 'mydb',
    port : 3306,
    dateStrings: 'date'
});

module.exports=connection;