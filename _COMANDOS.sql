create database cadastro 
-- // cria um banco de dados
default character set utf8
default collate utf8_general_ci; 
-- // define os caracteres utf8

use cadastro 
-- // abre o banco de dados em questão

create table pessoas ( 
    -- assim se cria uma tabela(pasta), é semelhante a objeto.
id int not null auto_increment, 
-- // not null = proibido estar em branco, auto_increment = incrementa por default
nome varchar(30) not null,
nascimento date,
sexo enum('M', 'F'),
peso decimal(5,2), 0000,00
altura decimal(3,2),
nacionalidade varchar(20) default 'Brasil',
primary key(id) 
-- // com isso não poderá haver dados repetidos.
) default charset = utf8;


insert into pessoas
(nome, nascimento, sexo, peso, altura, nacionalidade)
values
('Godofredo', '1984-01-02', 'M', '78.5', '1.83', 'Brasil');
-- assim se insere dados nas tabelas.


alter table pessoas
add column profissao varchar(30);
--  adiciona uma nova coluna na tabela

alter table pessoas
drop column profissao;
-- exclui a coluna

alter table pessoas
modify column profissao varchar(20);
-- modifica o tipo primitivo

alter table pessoas
add column profissao varchar(30) after nome;
-- adciona coluna apos o nome

add column profissao varchar(30) first;
-- adiciona no primeiro, se n colocar nada entra em ultimo.

alter table pessoas
change column profissao prof varchar(20);
-- altera o nome da coluna

alter table pessoas
rename to gafanhoros;
--  modificar o nome da tabela inteira.

create table if not exists cursos
-- só cria tabela se n existir

create table if not exists cursos(
--so cria se n existir
nome varchar(30) not null unique,
-- nao pode ser vazio e é único na tabela
descricao text,
carga int unsigned,
-- sem sinal
totaulas int, 
ano year default '2016'
) default charset = utf8;


alter table cursos
add primary key(idcurso);
-- add a primary key

drop table cursos;
-- apaga a tabela