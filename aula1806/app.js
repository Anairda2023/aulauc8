const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Olá Mundo!')

});

app.get('/movies', (req, res) => {

    db.query('select * from movies', [], function (error, results) {
        if (error) {
            res.status(500).send('Erro ao executar a consulta sql')
            return
        }
        res.json(results);
    });

});


app.get('/questao01', (req, res) => {

    db.query('select * from movies, genres where id_genres = genres.id', (error, results) => {
        if (error) {
            res.status(500).send('Erro ao executar a consulta sql')
            return
        }
        res.json(results);
    });

});

app.get('/questao/:id', (req, res) => {
    const id = req.params.id;

    db.query(`select * from movies where name like '${id}%'`, (error, results) => {
        if (error) {
            res.status(500).send('Erro ao executar a consulta sql')
            return
        }
        res.json(results);
    });

});

app.post('/cadastro', (req, res) => {
    const { id, name, id_genres } = req.body;
    console.log(id, name, id_genres);

    db.query(`insert into movies (id, name, id_genres) values (${id}, '${name}', ${id_genres})`, (error, results) => {
        if (error) {
            res.status(500).send('Erro ao executar a consulta sql')
            return
        }
        res.json(results);
    });

});

// app.post('/cadastro', (req,res)=>{
//     const {id, name, id_genres} = req.body;

//    console.log(id, name, id_genres);
// db.query(`insert into movies(id, name, id_genres) values ('${id}', '${name}', '${id_genres}')` , (error, results) =>{
//         if (error) {
//             res.status(500).send('Erro ao executar a consulta SQL');
//             return;
//         }
//         res.json(results);
//     });
// });

app.get('/questao', (req, res) => {

    db.query('select name from movies where name like "O%"', (error, results) => {
        if (error) {
            res.status(500).send('Erro ao executar a consulta sql')
            return
        }
        res.json(results);
    });

});

app.listen(port, () => {
    console.log(`aplicação rodando em http://localhost:${port}`)
});

