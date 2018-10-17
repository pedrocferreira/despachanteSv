var mysql = require('mysql');
const utf8 = require('utf8');
function createDBConnection() {
    return mysql.createConnection({
        host: 'mysql942.umbler.com',
        user: 'pedroocferreira',
        password: '9cce22f2',
        database: 'scaj'
    });
    
}


module.exports = function () {
    return createDBConnection;
}