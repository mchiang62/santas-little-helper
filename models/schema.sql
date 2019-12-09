DROP DATABASE IF EXISTS wishlistdev_db;
CREATE DATABASE wishlistdev_db;

ALTER TABLE users DROP COLUMN createdAt;
ALTER TABLE users DROP COLUMN updatedAt;