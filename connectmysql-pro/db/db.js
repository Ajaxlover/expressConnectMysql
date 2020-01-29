var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '120.24.167.179',
  user     : 'root',
  password : '147258',
  database : 'hello'
});
 
module.exports = connection;