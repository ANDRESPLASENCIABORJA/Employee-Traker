-- Delate any db with this db name --
DROP DATABASE IF EXISTS employeeTraker_DB;
-- Now create the DB --
CREATE DATABASE employeeTraker_DB;

-- Use this db for all the following code --
USE employeeTraker_DB;

-- Create the first table called department --
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  -- Unique identifier for each row, can be composed of multiple columns --
  PRIMARY KEY (id)
);

-- Create the second table of the db called role --
CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department (id)
);

-- Create the third table called employee --
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id  INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role (id)
);


