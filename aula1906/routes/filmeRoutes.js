const filmeController = require('../controllers/filmeController');
// const FilmeController = require('../controllers/FilmeController');
const express = require('express');
const router = express.Router();

router.get('/filmes', filmeController.listarFilmes);
router.post('/filmes/cadastro', filmeController.cadastrarFilme);
router.put('/filmes/:id', filmeController.atualizarFilme);
router.delete('/filmes/:id', filmeController.deletarFilme);


module.exports = router;



