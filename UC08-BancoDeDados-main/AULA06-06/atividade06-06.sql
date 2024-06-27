USE VIDEOLOCADORA;
SELECT * FROM FILMES;
SELECT * FROM GENERO;

INSERT INTO GENERO VALUES(8, 'SUSPENSE');

--1. SELECIONE O NOME DOS FILMES E A DESCRIÇÃO DOS SEUS GÊNEROS.
SELECT NOME AS FILME, DESCRICAO AS GÊNERO FROM FILMES, GENERO 
WHERE ID_GENERO = GENERO.ID;
--2.SELECIONE O NOME DOS FILMES E A DESCRIÇÃO DOS SEUS GÊNEROS, ORDENADOS PELO NOME DO FILME.
SELECT NOME AS FILME, DESCRICAO AS GÊNERO FROM FILMES, GENERO 
WHERE ID_GENERO = GENERO.ID ORDER BY NOME;
--3. SELECIONE O NOME DOS FILMES E A DESCRIÇÃO DOS SEUS GÊNEROS, ORDENADOS PELA DESCRIÇÃO DO GÊNERO.
SELECT NOME AS FILME, DESCRICAO AS GÊNERO FROM FILMES, GENERO 
WHERE ID_GENERO = GENERO.ID ORDER BY DESCRICAO;
--4. SELECIONE O NOME DOS FILMES E A DESCRIÇÃO DOS SEUS GÊNEROS, ONDE O ID DO GÊNERO SEJA MAIOR QUE 3, ORDENADOS PELO NOME DO FILME.
SELECT NOME,  DESCRICAO FROM FILMES, GENERO 
WHERE ID_GENERO = GENERO.ID AND ID_GENERO>3 ORDER BY DESCRICAO;  
--5. SELECIONE O NOME DOS FILMES E A DESCRIÇÃO DOS SEUS GÊNEROS, ONDE O NOME DO FILME COMEÇA COM A LETRA 'B', ORDENADOS PELA DESCRIÇÃO DO GÊNERO.
SELECT NOME, DESCRICAO FROM FILMES, GENERO
WHERE ID_GENERO = GENERO.ID AND NOME LIKE 'B%' ORDER BY DESCRICAO;
--6. SELECIONE O NOME DOS FILMES E A DESCRIÇÃO DOS SEUS GÊNEROS, ONDE O NOME DO FILME CONTÉM A PALAVRA 'QUALQUER', ORDENADOS PELO NOME DO FILME
SELECT NOME, DESCRICAO FROM FILMES, GENERO 
WHERE ID_GENERO = GENERO.ID AND NOME LIKE '%A%' ORDER BY NOME;
--7. SELECIONE O NOME DOS FILMES E A DESCRIÇÃO DOS SEUS GÊNEROS, ONDE O ID DO GÊNERO SEJA IGUAL A 2, ORDENADOS PELO NOME DO FILME
SELECT NOME,  DESCRICAO FROM FILMES, GENERO 
WHERE ID_GENERO = GENERO.ID AND ID_GENERO=2 ORDER BY NOME; 
--8. SELECIONE O NOME DOS FILMES E A DESCRIÇÃO DOS SEUS GÊNEROS, ONDE A DESCRIÇÃO DO GÊNERO CONTÉM A PALAVRA 'COMÉDIA', ORDENADOS PELO ID DO FILME.
SELECT NOME, DESCRICAO FROM FILMES, GENERO
WHERE ID_GENERO = GENERO.ID AND DESCRICAO LIKE '%TERROR%' ORDER BY FILMES.ID;
--9. ATUALIZE O NOME DE UM FILME ESPECÍFICO (POR EXEMPLO, ID = 5) PARA 'NOVO NOME'.
UPDATE FILMES SET NOME = 'As Branquelas' 
WHERE ID = 8;
--10. ATUALIZE O ID_GENERO DE UM FILME ESPECÍFICO (POR EXEMPLO, ID = 3) PARA 2.
UPDATE FILMES SET ID_GENERO = 1
WHERE ID = 7;
--11. ATUALIZE A DESCRIÇÃO DE UM GÊNERO ESPECÍFICO (POR EXEMPLO, ID = 1) PARA 'DRAMA'
UPDATE GENERO SET DESCRICAO = 'ADULTO' 
WHERE ID = 7;
--12. ATUALIZE O NOME DOS FILMES CUJO ID_GENERO É 4 PARA 'FILME ATUALIZADO'
UPDATE FILMES SET NOME = 'FILME ATUALIZADO' 
WHERE ID_GENERO = 4;
--13. ATUALIZE O ID_GENERO DE TODOS OS FILMES CUJO NOME COMEÇA COM 'A' PARA 3.
UPDATE FILMES SET ID_GENERO = 3
WHERE NOME LIKE 'A%';
--14. DELETE UM FILME ESPECÍFICO (POR EXEMPLO, ID = 10).
DELETE FROM FILMES WHERE ID = 10;
--15. DELETE TODOS OS FILMES CUJO ID_GENERO SEJA 4.
DELETE FROM FILMES WHERE ID_GENERO=4;
--16. DELETE TODOS OS GÊNEROS CUJO ID SEJA MAIOR QUE 5.
DELETE FROM GENERO WHERE ID > 5;
--17. DELETE TODOS OS FILMES CUJO NOME COMEÇA COM A LETRA 'B'.
DELETE FROM FILMES WHERE NOME LIKE 'M%';
--18. DELETE TODOS OS FILMES CUJO ID_GENERO SEJA 2 E O NOME CONTÉM 'TESTE'.
DELETE FROM FILMES WHERE ID_GENERO = 2 AND NOME LIKE '%THE%';
--19. DELETE A TABELA GÊNERO
DROP TABLE GENERO;
--20. DELETE A TABELA FILMES
DROP TABLE FILMES;
--21. DELETE A BASE DE DADOS
DROP DATABASE VIDEOLOCADORA;






