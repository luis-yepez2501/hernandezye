create database L18100191;
use L18100191;


create table Campos(
idnombre varchar(50) not null,
numerotel varchar(10) not null,
fechaida varchar(50) not null,
correo varchar(30) not null,
fechare varchar(30) not null,
nencargado varchar(30) not null,
PRIMARY KEY(idnombre)
);

insert into Campos values ('Luis Francisco Hernandez Yepez','123456789',
'12/25/99','yepezluis279@gmail.com','02/15/00','Julian');

insert into Campos values ('Juan Escutia','2515615',
'05/15/01','juanito123@gmail.com','05/25/01','Pedro');

insert into Campos values ('John Lennon','8671543696',
'10/01/1980','lennon123@gmail.com','10/08/1980','Yoko');