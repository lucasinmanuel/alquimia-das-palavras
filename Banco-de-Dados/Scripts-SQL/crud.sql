create database crud;

create table usuarios(

id_usuario int not null auto_increment primary key,
nome varchar(50) not null,
apelido varchar(20) not null unique,
data_cadastro date not null,
email varchar(20) not null unique,
senha varchar(50) not null,
nacionalidade varchar(20) not null,
genero varchar(20) not null,
data_nascimento date not null
	
);

create table game_save(

cod_save int not null primary key auto_increment,
id_usuario int not null,
dia int not null,
moeda_bronze int not null,
moeda_prata int not null,
moeda_ouro int not null,
ingredientes varchar(255),
itens varchar(255),
potions varchar(255),
FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)

);

select * from usuarios;
select * from game_save;


