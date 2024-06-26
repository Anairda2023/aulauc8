const db = require('../database/db');

class Genero {



    async listarGeneros() {
        return new Promise((resolve, reject) => {
            db.query('select * from genres', (error, results) => {
                if (error) {
                    console.log('Erro ao executar a consulta sql');
                    return
                } else {
                    resolve(results);
                }
            });

        });
    }



    async cadastrarGenero(description) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO GENres (DESCRIption) VALUES (?)', [description], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async atualizarGenero(id, description) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE GENres SET DESCRIption = ? WHERE ID = ?', [description, id], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async deletarGenero(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM GENres WHERE ID = ?', [id], (error, results) => {
                if (error) {
                    console.log('Erro ao executar o script sql');
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}
module.exports = new Genero();