create database senac;
use senac;
create table curso(
    id int auto_increment,
    name varchar(200) not null,
    description varchar(200) not null,
    primary key(id)
);
