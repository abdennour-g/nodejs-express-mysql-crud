var out = [];
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydata'
});
con.connect(function(err) {});
var sql = 'select * from person order by id desc';
var ins = (pack) => {
    var sql_inser = 'INSERT INTO person set ?';
    con.query(sql_inser, [pack], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
}
var up = (pack, id) => {
    var sql_up = 'update person set ? where id=?';
    con.query(sql_up, [pack, id], function(err, result) {
        if (err) throw err;
        console.log('Number of records inserted: ' + result.affectedRows);
    });
    // console.log('id=' + id);
}
var del = (id) => {
    var sql_del = 'delete from person where id=?';
    con.query(sql_del, [id], function(err, result) {
        if (err) throw err;
        console.log('Number of records inserted: ' + result.affectedRows);
    });
    // console.log('id=' + id);
}
exports.ins = ins;
exports.up = up;
exports.del = del;
exports.con = con;
exports.sql = sql;