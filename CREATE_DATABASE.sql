-- Creacion de la base de datos, si no existe.API
CREATE DATABASE IF NOT EXISTS delilahresto;

-- Usando la base de datos
USE delilahresto;

-- Creo tablas de la base de datos
CREATE TABLE usuarios(
	id int not null auto_increment,
    nombres varchar(150),
    correo varchar(150) not null,
    username varchar(150) not null,
	password varchar(16)  not null,
    direccion varchar(150),
    telefono varchar(10),
    tipousuario varchar(1),
    primary key (id)
);

CREATE TABLE mediosdepago(
	id int not null auto_increment,
    descripcion varchar(150) not null,
    activo varchar(1),
    primary key (id)
);

CREATE TABLE pedidos(
	id int not null auto_increment,
    hora datetime not null,
    estado varchar(150) not null,
    usuarioId int not null,
    mediodepagoId int not null,
    primary key (id),
    foreign key (usuarioId) references usuarios(id),
    foreign key (mediodepagoId) references mediosdepago(id)
);


CREATE TABLE platos(
	id int not null auto_increment,
    nombre varchar(150) not null,
    urlImagen varchar(200),
    precio dec(5,2),
	primary key (id)
);

CREATE TABLE pedidosdetalle(
	id int not null auto_increment,
    pedidosId int not null,
    platosId int not null,
    primary key (id),
    foreign key (pedidosId) references pedidos(id),
    foreign key (platosId) references platos(id)
);

-- Insert de usuario Administrador base.
INSERT INTO usuarios(nombres, correo, username, password, direccion, telefono, tipousuario)
VALUES ('Administrador', 'joe.rincong@gmail.com', 'admin', '123456', 'av 123', '3115142189', 'A');


-- Insert medios de pago

INSERT INTO mediosdepago(descripcion, activo)
values ('Efectivo', 'A');
INSERT INTO mediosdepago(descripcion, activo)
values ('Tarjeta Credito', 'A');
INSERT INTO mediosdepago(descripcion, activo)
values ('Tarjeta Debito', 'A');

-- Insert platos
INSERT INTO platos (nombre, urlImagen, precio) VALUES
('Hamburguesa Doble Carne', '/images/prod-101', 10),
('Cubano Ropa Vieja', '/images/prod-102', 10),
('Patacones x 6 Und', '/images/prod-103', 5),
('Guandolo Jarra 200ml', '/images/prod-104', 10),
('Jugo de Lulo Jarra 200ml', '/images/prod-105', 1);

-- Insert Pedidos de prueba
INSERT INTO pedidos (hora, estado, usuarioId, mediodepagoId) VALUES
(NOW(), 'nuevo', 2, 1),
(NOW(), 'modificado', 3, 1);

