var mysql = require('mysql');
const utf8 = require('utf8');
function createDBConnection() {
    return mysql.createConnection({
        host: 'mysql942.umbler.com',
        user: 'pedroocferreira',
        password: '',
        database: 'scaj'
    });
    
}


module.exports = function () {
    return createDBConnection;
}
