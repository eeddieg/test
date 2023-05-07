CREATE DATABASE test;
CREATE TABLE `test`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR (255) NOT NULL,
  `email` VARCHAR (255) NOT NULL,
  `password` VARCHAR (255) NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `test`.`users` (name, email, password)
VALUES ("qwe", "qwe@qwe.qwe", "qwe");

CREATE USER 'user' @'localhost' IDENTIFIED BY 'user';
GRANT ALL PRIVILEGES ON test.users TO 'user' @'localhost';
flush privileges;
