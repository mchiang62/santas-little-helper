DROP DATABASE IF EXISTS wishlistdev_db;
CREATE DATABASE wishlistdev_db;

USE wishlistdev_db;

CREATE TABLE users 
(
id int NOT NULL AUTO_INCREMENT,
user_name varchar (20) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE wishlist1
(
    id int NOT NULL AUTO_INCREMENT,
    item_name varchar(50) NOT NULL,
    price int NOT NULL,
    item_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id) REFERENCES users(id)
);

CREATE TABLE wishlist2
(
    id int NOT NULL AUTO_INCREMENT,
    item_name varchar(50) NOT NULL,
    price int NOT NULL,
    item_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id) REFERENCES users(id)
);

CREATE TABLE wishlist3
(
    id int NOT NULL AUTO_INCREMENT,
    item_name varchar (50) NOT NULL,
    price int NOT NULL,
    item_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id) REFERENCES users(id)
);

CREATE TABLE wishlist4
(
    id int NOT NULL AUTO_INCREMENT,
    item_name varchar(50) NOT NULL,
    price int NOT NULL,
    item_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id) REFERENCES users(id)
);