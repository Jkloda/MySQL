# MySQL
Outcome 1 - SQL DDL notes and tutorials 
CREATE TABLE towels
  (
    code VARCHAR(8) NOT NULL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    colour VARCHAR(20)DEFAULT "White");
INSERT INTO towels ( code, name, colour )
  VALUES ( "821/7355", "Dolphin", "Blue" );
INSERT INTO towels ( colour, code, name )
  VALUES ( "Lilac", "830/1921", "Daisy" );
INSERT INTO towels ( code, name )
  VALUES ( "830/2078", "Starburst" );


UPDATE bath_towels SET colour = 'Beige'
  WHERE name = 'Harvest';
UPDATE bath_towels SET colour = 'Blue'
  WHERE name = 'Dolphin';
UPDATE bath_towels SET colour = 'Lilac'
  WHERE name = 'Daisy';
UPDATE bath_towels SET name = 'Tempest', colour = 'Maroon'
  WHERE code = '821/9628';
SELECT * FROM bath_towels;

SELECT * FROM bath_towels;
DELETE FROM bath_towels WHERE code = "821/9735";
DELETE FROM bath_towels WHERE code = "821/7355";
SELECT * FROM bath_towels;29. 
DELETE FROM bath_towels;
SELECT * FROM bath_towels;
DROP TABLE towels;
DROP TABLE bath_towels;


Instruction sheet 5

CREATE TABLE microwaves
  (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    maker VARCHAR (20) NOT NULL, 
    model VARCHAR (20) NOT NULL,
    power INT NOT NULL);

INSERT INTO microwaves ( maker, model, power )
  VALUES ("Sharp", "R254SL", 800);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Sharp", "R33STM", 900);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Sanyo", "EMS3553", 900);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Panasonic", "NNE442", 900);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Daewoo", "KDR3000", 800);
SELECT *  FROM microwaves;
SELECT maker
  FROM microwaves;
SELECT model
  FROM microwaves;
DROP TABLE microwaves;
---
CREATE TABLE IF NOT EXISTS microwaves
  ( 
    id INTAUTO_INCREMENT PRIMARY KEY, 
    maker VARCHAR (20) NOT NULL,
    model VARCHAR (20) NOT NULL,  
    power INT NOT NULL);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Sharp", "R254SL", 800);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Sharp", "R33STM", 900);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Sanyo", "EMS3553", 900);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Panasonic", "NNE442", 900);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Daewoo", "KDR3000", 800);
SELECT *  FROM microwaves;
SELECT maker, id 
  FROM microwaves;
SELECT model, power
  FROM microwaves;
DROP TABLE microwaves;
---
CREATE TABLE IF NOT EXISTS microwaves
  ( 
    id INTAUTO_INCREMENT PRIMARY KEY, 
    maker VARCHAR (20) NOT NULL,
    model VARCHAR (20) NOT NULL,  
    power INT NOT NULL);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Sharp", "R254SL", 800);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Sharp", "R33STM", 900);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Sanyo", "EMS3553", 900);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Panasonic", "NNE442", 900);
INSERT INTO microwaves ( maker, model, power )
  VALUES ("Daewoo", "KDR3000", 800);
SELECT *  FROM microwaves;
SELECT id, maker, model, power
  FROM microwaves
  WHERE model = 'R33STM';
 SELECT id, maker, model, power
  FROM microwaves
  WHERE model = 'NNE442';
---
CREATE TABLE sharp_ovens
  (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    model VARCHAR (20) NOT NULL, 
    power INT NOT NULL,
    grill VARCHAR (3) DEFAULT "No");
INSERT INTO sharp_ovens (model, power, grill)
  VALUES ("R654", 800, "Yes");
INSERT INTO sharp_ovens (model, power, grill)
  VALUES ("R64ST", 800, "Yes");
SELECT *  FROM microwaves;
SELECT *  FROM sharp_ovens;
INSERT INTO sharp_ovens (model, power)
SELECT model, power FROM microwaves
WHERE maker = 'Sharp';
SELECT *  FROM sharp_ovens;
DROP TABLE microwaves;
DROP TABLE sharp_ovens;
---
CREATE TABLE critters
(
  id INT PRIMARY KEY, 
 name VARCHAR(20)NOT NULL
);
 INSERT INTO critters (id, name) 
  VALUES (3,'Beaver');
INSERT INTO critters (id, name) 
  VALUES (1,"Duck");
INSERT INTO critters (id, name) 
  VALUES (4,"Aardvark");
INSERT INTO critters (id, name) 
  VALUES (2,"Elephant");
INSERT INTO critters (id, name)
  VALUES (5,"Camel");
SELECT *  FROM critters;
SELECT *  FROM critters ORDER BY id;
SELECT name  FROM critters ORDER BY name;
DROP TABLE critters;
---
CREATE TABLE employees
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR (20) NOT NULL,
  last_name VARCHAR (20) NOT NULL
);
INSERT INTO employees (first_name, last_name)
 VALUES ("Arthur", "Smith");
INSERT INTO employees (first_name, last_name) 
VALUES ("Peter", "Jones");
INSERT INTO employees (first_name, last_name) 
VALUES ("Ann", "Smith");
INSERT INTO employees (first_name, last_name)
 VALUES ("Sandra", "Williams");
INSERT INTO employees (first_name, last_name)
 VALUES ("Andrew", "Smith");
INSERT INTO employees (first_name, last_name)
 VALUES ("Paul", "Jones");
INSERT INTO employees (first_name, last_name) 
VALUES ("Sally", "Williams");
SELECT *  FROM employees;
SELECT first_name, last_name FROM employees
ORDER BY last_name, first_name;
DROP TABLE employees;
---
CREATE TABLE top_5_films
(
  position INT PRIMARY KEY,  
title VARCHAR (25) NOT NULL, 
 year INT NOT NULL);
INSERT INTO top_5_films (position, title, year)
 VALUES (1, "Citizen Kane", 1941);
INSERT INTO top_5_films (position, title, year) 
VALUES (2, "Casablanca",1942);
INSERT INTO top_5_films (position, title, year) 
VALUES (3, "The Godfather", 1972);
INSERT INTO top_5_films (position, title, year) 
VALUES (4, "Gone With The Wind",1939);
INSERT INTO top_5_films (position, title, year)
 VALUES (5, "Lawrence Of Arabia", 1962);
SELECT * FROM top_5_films ORDER BY position DESC;
SELECT * FROM top_5_films ORDER BY year ASC;
SELECT * FROM top_5_films ORDER BY title ASC;
DROP TABLE top_5_films;

Instruction sheet 6

CREATE TABLE clock_radios
( 
  code CHAR (8) PRIMARY KEY,
  make VARCHAR (25) NOT NULL,
  model VARCHAR (25) NOT NULL, 
  price DECIMAL (4,2) NOT NULL);

INSERT INTO clock_radios (code, make, model, price)
  VALUES ("512/4792", "Alba", "C2108", 6.75);
INSERT INTO clock_radios (code, make, model, price) 
  VALUES ("512/4125", "Hitachi", "KC30", 8.99);
INSERT INTO clock_radios (code, make, model, price)
  VALUES ("512/1458", "Philips", "AJ3010", 19.99);
INSERT INTO clock_radios (code, make, model, price)
  VALUES ("512/3669", "Morphy Richards", "28025", 19.99);
INSERT INTO clock_radios (code, make, model, price)
  VALUES ("512/1444", "Sony", "C253", 29.49);
SELECT * FROM clock_radios WHERE price < 19.99;
SELECT * FROM clock_radios WHERE price > 19.99;
SELECT * FROM clock_radios WHERE price <= 19.99;
DROP TABLE clock_radios;
---
CREATE TABLE office_chairs
( 
 code CHAR (8) PRIMARY KEY, 
 model VARCHAR (25) NOT NULL,
  fabric VARCHAR (25) DEFAULT "Cloth",
  price DECIMAL (6,2) NOT NULL
);
INSERT INTO office_chairs (code, model, price)
 VALUES ("617/9148", "Clerk", 19.99);
INSERT INTO office_chairs (code, model, price)
 VALUES ("617/8156", "Secretary", 34.99);
INSERT INTO office_chairs (code, model, fabric, price) 
VALUES ("617/9131", "Manager", "Leather", 49.99);
INSERT INTO office_chairs (code, model, fabric, price)
  VALUES ("621/0258", "Captain", "Wood", 99.99);
INSERT INTO office_chairs (code, model, fabric, price)  
VALUES ("619/6444", "Executive", "Leather", 124.99);
SELECT * FROM office_chairs;
SELECT * FROM office_chairs WHERE fabric = 'Leather';
SELECT * FROM office_chairs WHERE fabric <> 'Leather;
DROP TABLE office_chairs;
---
CREATE TABLE steam_irons
( 
 id INT AUTO_INCREMENT PRIMARY KEY, 
 make VARCHAR (25)NOT NULL, 
 model VARCHAR (25)NOT NULL, 
 colour VARCHAR (25)
);
INSERT INTO steam_irons (make, model, colour)
 VALUES ("Philips", "GC3020", "Lilac");
INSERT INTO steam_irons (make, model)
  VALUES ("Morphy Richards", "40608");
INSERT INTO steam_irons (make, model)
 VALUES ("Tefal", "1819 Avantis");
INSERT INTO steam_irons (make, model)
 VALUES ("Rowenta", "DM529");
INSERT INTO steam_irons (make, model, colour) 
VALUES ("Bosch", "TDA8360", "Blue");
SELECT * FROM steam_irons
SELECT colour 
FROM steam_irons;
WHERE column = NOT NULL 
DROP TABLE steam_irons;
---
CREATE TABLE treadmills
(
  code CHAR (8) PRIMARY KEY,
  make VARCHAR (25) NOT NULL, 
 model VARCHAR (25) NOT NULL,
  price INT NOT NULL
);
INSERT INTO treadmills (code, make, model, price)
 VALUES ("335/1914", "York", "Pacer 2120", 159);
INSERT INTO treadmills (code, make, model, price)
 VALUES ("335/1907", "York", "Pacer 2750", 349);
INSERT INTO treadmills (code, make, model, price)
 VALUES ("335/1921", "York", "Pacer 3100", 499);
INSERT INTO treadmills (code, make, model, price)
 VALUES ("335/2717", "Proform", "7.25Q", 799);
INSERT INTO treadmills (code, make, model, price)
 VALUES ("335/2652", "Reebok", "TR1 Power Run", 895)
SELECT * FROM treadmills WHERE price BETWEEN 300 AND 500;
SELECT * FROM treadmills WHERE price BETWEEN 'Proform' AND 'York';
DROP TABLE treadmills;
---
CREATE TABLE dining_sets
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  model VARCHAR (25) NOT NULL,
  colour VARCHAR (25) NOT NULL,
  price DECIMAL (6,2) NOT NULL);
INSERT INTO dining_sets (model, colour, price)
  VALUES ("Catalina", "Cherry", 349.99);
INSERT INTO dining_sets (model, colour, price)
 VALUES ("Bistro", "Silver", 99.99);
INSERT INTO dining_sets (model, colour, price)
 VALUES ("Michigan", "Silver", 179.99 );
INSERT INTO dining_sets (model, colour, price)
  VALUES ("Oregon", "Silver", 199.99);
INSERT INTO dining_sets (model, colour, price)
 VALUES ("Medina", "Black", 159.99);
SELECT * FROM dining_sets;
SELECT * FROM dining_sets WHERE colour = 'Silver';
SELECT * FROM dining_sets WHERE price > 100.00;
DROP TABLE dining_sets;
---
REATE TABLE dining_sets
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  model VARCHAR (25) NOT NULL,
  colour VARCHAR (25) NOT NULL,
  price DECIMAL (6,2) NOT NULL
);
INSERT INTO dining_sets (model, colour, price)
 VALUES ("Catalina", "Cherry", 349.99);
INSERT INTO dining_sets (model, colour, price)
  VALUES ("Bistro", "Silver", 99.99);
INSERT INTO dining_sets (model, colour, price)
 VALUES ("Michigan", "Silver", 179.99 );
INSERT INTO dining_sets (model, colour, price)
 VALUES ("Oregon", "Silver", 199.99);
INSERT INTO dining_sets (model, colour, price)
 VALUES ("Medina", "Black", 159.99);
SELECT * FROM dining_sets;
SELECT * FROM dining_sets WHERE colour <> 'Silver';
SELECT * FROM dining_sets WHERE price < 100.00;
DROP TABLE dining_sets;
---
CREATE TABLE IF NOT EXISTS shredders
(
  model VARCHAR(8)PRIMARY KEY,
   type VARCHAR(25) DEFAULT "strip cut",
   price DECIMAL(6,2)
);
INSERT INTO shredders (model, price)
 VALUES ("PS60", 64.99);
INSERT INTO shredders (model, price)
 VALUES ("PS70", 99.99);
INSERT INTO shredders (model, type, price)
 VALUES ("PS400", "cross cut", 64.99);
INSERT INTO shredders (model, price)
VALUES ("PS500", 29.95);
SELECT * FROM shredders;
SELECT * FROM shredders WHERE type LIKE "%cross%";
 DROP TABLE IF EXISTS shredders;
