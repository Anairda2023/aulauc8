CREATE DATABASE familia;
use familia;

CREATE table pai (
    cod_pai int not null,
    nome_pai varchar (200) not null,
    idade_pai int not null,
    primary key(cod_pai)
);
use familia;
CREATE table filho (
    cod_filho int not null,
    cod_pai int not null,
    nome_filho varchar (200) not null,
    genero_filho char not null,
    primary key(cod_filho),
    foreign key(cod_pai) references pai(cod_pai)

);
use familia;
insert into pai (
    nome_pai, idade_pai, cod_pai) values ("Daniel se Souza Leão Sobrinho", 62,1), ("joão Carlos da Silva", 38, 2), ("Fernando de Oliveira", 36, 3), ("Jairo de Oliveira Leão", 32,4);
use familia;
insert into filho (cod_filho, nome_filho, cod_pai, genero_filho) values (1, "Renata de Oliveira Leão", 1,"f"), 
(2,"Fernando de Oliveira Leão", 1,"m"),
(3, "Roberta de Oliveira Leão", 1, "f"), 
(4, "Jairo de Oliveira Leão", 1, "m"), 
(5, "Giovanna da Silva", 2, "f"),
(6, "Lucas Ribeiro Oliveira", 3, "m"),
 (7, "Helder Ribeiro Oliveira", 3, "m");
use familia;

SELECT max(idade_pai) from pai;
use familia;

SELECT min (idade_pai) FROM pai;

use familia;

SELECT * from pai
WHERE idade_pai = (SELECT max(idade_pai) from pai);

use familia;

SELECT * from pai
WHERE idade_pai = (SELECT min(idade_pai) from pai);

use familia;

SELECT * from pai
WHERE idade_pai <> (SELECT max(idade_pai) from pai);
