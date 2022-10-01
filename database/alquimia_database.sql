create database if not exists alquimia;

create table if not exists usuarios(

id int not null auto_increment primary key,
nome varchar(80) not null,
apelido varchar(20) not null unique,
data_cadastro date not null,
email varchar(100) not null unique,
senha varchar(255) not null,
nacionalidade varchar(100) not null,
genero varchar(20) not null,
data_nascimento date not null
	
);

insert into usuarios(nome,apelido,data_cadastro,email,senha,nacionalidade,genero,data_nascimento) 
values("lucas","devLucas","2022-09-29","lucas.alquimia@gmail.com","123","Brasileiro","masculino","2002-02-11");


create table if not exists game_save(

id int not null primary key auto_increment,
id_usuario int not null,
dia int not null,
moeda_bronze int not null,
moeda_prata int not null,
moeda_ouro int not null,
ingredientes varchar(255),
itens varchar(255),
potions varchar(255),
FOREIGN KEY (id_usuario) REFERENCES usuarios (id)

);

select * from usuarios;
select * from game_save;

insert into usuario values(null,"luquinha","2002-09-30","2002-02-11","LUCAS@GMAIL.COM","masculino","brasileiro","lucas emanuel","123");
