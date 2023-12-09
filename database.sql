CREATE DATABASE IF NOT EXISTS estelar_odyssey;

USE estelar_odyssey;

CREATE TABLE planetas (
    id_planeta      INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    descripcion     TEXT,
    PRIMARY KEY     (id_planeta)
);

CREATE TABLE naves_espaciales (
    id_nave         INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    tipo            VARCHAR(128),
    capacidad       INTEGER,
    PRIMARY KEY     (id_nave)
);

CREATE TABLE recursos (
    id_recurso      INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    descripcion     TEXT,
    PRIMARY KEY     (id_recurso)
);

CREATE TABLE misiones (
    id_mision       INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    descripcion     TEXT,
    recompensa      VARCHAR(128),
    fk_id_planeta   INTEGER,
    fk_id_nave      INTEGER,
    PRIMARY KEY     (id_mision),
    FOREIGN KEY     (fk_id_planeta)     REFERENCES planetas(id_planeta),
    FOREIGN KEY     (fk_id_nave)        REFERENCES naves_espaciales(id_nave)
);





INSERT INTO planetas (nombre, descripcion) VALUES
    ('Tierra', 'Planeta hogar de la humanidad.'),
    ('Marte', 'Conocido como el planeta rojo.'),
    ('Alderon', 'Planeta pacífico habitado por seres humanoides.'),
    ('Pandora', 'Planeta con una exuberante vida biológica.'),
    ('Vulcano', 'Planeta volcánico con terreno extremo.'),
    ('Endor', 'Luna boscosa habitada por Ewoks.'),
    ('Hoth', 'Planeta helado con vastas llanuras de hielo.'),
    ('Naboo', 'Planeta con paisajes variados y diversas culturas.'),
    ('Tatooine', 'Desértico y árido, hogar de los hutts.'),
    ('Krypton', 'Planeta natal de Superman.');




INSERT INTO naves_espaciales (nombre, tipo, capacidad) VALUES
    ('Interceptor Estelar', 'Caza', 1),
    ('Nave Exploradora', 'Exploración', 5),
    ('Nave de Carga', 'Carga', 50),
    ('Acorazado Galáctico', 'Guerra', 1000),
    ('Nave Comercial', 'Comercio', 200),
    ('Transportador de Pasajeros', 'Pasajeros', 150),
    ('Nave Minera', 'Minería', 30),
    ('Nave de Investigación', 'Investigación', 10),
    ('Nave Médica', 'Médica', 20),
    ('Nave Sigilosa', 'Sigilosa', 2);





INSERT INTO recursos (nombre, descripcion) VALUES
    ('Oxígeno', 'Elemento vital para la respiración.'),
    ('Minerales Preciosos', 'Metales y gemas valiosos.'),
    ('Hierbas Curativas', 'Plantas medicinales con propiedades curativas.'),
    ('Cristales Energéticos', 'Fuente de energía avanzada.'),
    ('Agua Pura', 'Agua potable sin contaminantes.'),
    ('Plasma Volcánico', 'Sustancia con propiedades energéticas.'),
    ('Piel de Bestia', 'Material resistente de criaturas alienígenas.'),
    ('Gases Atmosféricos', 'Elementos gaseosos para diversos fines.'),
    ('Núcleo Planetario', 'Núcleo central de un planeta.'),
    ('Minerales Radioactivos', 'Elementos con radiación intensa.');





INSERT INTO misiones (nombre, descripcion, recompensa, fk_id_planeta, fk_id_nave) VALUES
    ('Exploración de Marte', 'Explora las regiones desconocidas de Marte.', 'Créditos Galácticos', 2, 3),
    ('Negociaciones en Endor', 'Establece relaciones diplomáticas con los Ewoks.', 'Alianza Intergaláctica', 6, 5),
    ('Minería en Vulcano', 'Extrae minerales valiosos del planeta volcánico.', 'Minerales Raros', 5, 7),
    ('Rescate en Hoth', 'Rescata a exploradores varados en el planeta helado.', 'Reconocimiento Galáctico', 7, 8),
    ('Comercio en Tatooine', 'Realiza intercambios comerciales con habitantes de Tatooine.', 'Suministros Esenciales', 9, 6),
    ('Investigación en Pandora', 'Investiga la flora y fauna únicas de Pandora.', 'Conocimiento Científico', 4, 9),
    ('Defensa de Naboo', 'Protege Naboo de amenazas externas.', 'Medalla de Honor', 8, 4),
    ('Recuperación en Alderon', 'Recupera tecnología perdida en Alderon.', 'Tecnología Avanzada', 3, 2),
    ('Turismo en Nueva Tierra', 'Transporta turistas a la nueva colonia en Nueva Tierra.', 'Créditos Turísticos', 1, 6),
    ('Rescate Médico en Krypton', 'Rescata a sobrevivientes en el planeta devastado.', 'Medallas de Mérito', 10, 9);

