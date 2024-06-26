const db = require('../database/db');

class Filme{



async listarFilmes(){
    return new Promise ((resolve, reject)=>{
        db.query('select * from movies', (error, results)=>{
            if(error){
                console.log('Erro ao executar a consulta sql');
                return
            }else{
                resolve(results);
            }    
        });

    });
}

async cadastrarFilme(name, id_genres) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO movies (name, id_genres) VALUES (?, ?)', [name, id_genres], (error, results) => {
            if (error) {
                console.log('Erro ao executar o script sql');
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

async atualizarFilme(id, name, id_genres) {
    return new Promise((resolve, reject) => {
        db.query('UPDATE movies SET NaME = ?, ID_GENres = ? WHERE ID = ?', [name, id_genres, id], (error, results) => {
            if (error) {
                console.log('Erro ao executar o script sql');
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

async deletarFilme(id) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM movies WHERE ID = ?', [id], (error, results) => {
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
module.exports=new Filme();