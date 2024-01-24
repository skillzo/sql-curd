CREATE DATABASE todo_app;
USE todo_app;


CREATE TABLE todo (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    date_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO todo ( title, description)
VALUES
('Python', 'Learn python today '),
('MySql todo api', 'Boost your sql express knowledge');


