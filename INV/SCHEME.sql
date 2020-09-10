CREATE TABLE INVENTARIO(
ID INTEGER,
REGION VARCHAR(20),
NOMBRECV VARCHAR(30),
FECHA DATE,
ENTREGANOMBRE VARCHAR(60),
DISPOSITIVO VARCHAR(20),
MARCA VARCHAR(20),
MODELO VARCHAR(20),
SERIE VARCHAR(20),
REMORZAR VARCHAR(2),
ESTADO VARCHAR(20),
BODEGA VARCHAR(20),
EMPRESA VARCHAR(10)
);

CREATE TABLE CV(
CODIGO INTEGER(5),
NOMBRE VARCHAR(50),
SPRINT VARCHAR(10)
);

CREATE TABLE CELULARESBARCEL(CODIGO INT(5), CV VARCHAR(30), CANTIDAD INT(5));
CREATE TABLE CELULARESBIMBO(CODIGO INT(5), CV VARCHAR(30), CANTIDAD INT(5));
CREATE TABLE CELULARESRICOLINO(CODIGO INT(5), CV VARCHAR(30), CANTIDAD INT(5));

CREATE TABLE HANDHELDBARCEL(CV INT(5), CANTIDAD INT(5));
CREATE TABLE HANDHELDBIMBO(CV INT(5), CANTIDAD INT(5));
CREATE TABLE HANDHELDRICOLINO(CV INT(5), CANTIDAD INT(5));

CREATE TABLE RUTAS(
CV INTEGER(5),
PAIS VARCHAR(20),
GERENCIA VARCHAR(30),
RUTAS INTEGER(5),
HANDHELD INTEGER(5),
STOCKOP INTEGER(5)	
);

CREATE TABLE DETALLESBAJAS(
SERIE VARCHAR(20),
EMPRESA VARCHAR(35),
ORGANIZACIONPROV VARCHAR(35),
FECHABAJA DATE,
TICKET VARCHAR(30),
MOTIVO VARCHAR(200),
FECHAREPORTE DATE,
BAJA_APLICADA VARCHAR(10)
);

CREATE TABLE USUARIOS(ID INTEGER(2), EMAIL VARCHAR(60), encrypted_password varchar(100), salt varchar(10));

INSERT INTO USUARIOS (ID, EMAIL, encrypted_password, salt) VALUES (0, 'root@localhost', '8aSuJa9Uwg2f3sAKLF+1PVjz32M1ZjM0YTgwZjFh', '5f34a80f1a');