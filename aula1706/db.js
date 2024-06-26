const sql = require('mssql');
//configuração da conexão

const config = {
    user:'sa', 
    password:'sa',
    server: 'localhost',
    database: 'mctec',
    options: {
        encrypt:true,
        enableArithAbort:true
    }
};
//Função de conexão com o banco

const conectionBD = async () => {
    try{

        const pool = await sql.connect(config);
        console.log('Conexão bem sucessida');
        return pool;
    }catch(err){
        console.error('Erro ao se conectar com o Sql  Server:', err);
        throw err;
    }
};
//Função de consulta do Banco da Dados

conectionBD();
