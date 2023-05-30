const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : MYSQL_USER,
//     password : MYSQL_PASS,
//     database : MYSQL_DATABASE,
//     multipleStatements: true
// })

const connection = mysql.createConnection({
    host     : "bkgla15cztcbj4h4nlrn-mysql.services.clever-cloud.com",
    user     : "uctpxttcrsilcyi1",
    password : "upJmf04UKzg82f34JlcV",
    database : "bkgla15cztcbj4h4nlrn",
    multipleStatements: true
})

connection.connect((err)=>{
    err?console.log(`Error ${err}`):console.log(`Connected to mysql dataabse`);
});

module.exports = connection;