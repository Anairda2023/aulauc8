const db = require ('./dbMysql');

const bdModel = {
    getData :(callback) => {
        db.query('select * from movies', [], function (error,results){
            callback(error,results);

        });
        
    }
}

module.exports = bdModel;