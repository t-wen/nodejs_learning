var express = require('express');
var fs = require("fs");
var app = express();
 
app.use(express.static(__dirname));

app.get('/singupAccount', function (req, res) {
 
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '661475chen',
      database : 'my_db'
    });
     
    connection.connect();

    var response = {
        "WechartName":req.query.WechartName,
        "PhoneNumber":req.query.PhoneNumber,
        "Password":req.query.Password
    };

    var  addSql = 'INSERT INTO Persons(WechartName, PhoneNumber, Password) VALUES(?,?,?)';
    var  addSqlParams = [response.WechartName, response.PhoneNumber, response.Password];

    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            res.send('执行sql出错!');
            return;
        }
        res.send('Welcome~ SingUp Success ^_^');
    });
    connection.end();
 })

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

