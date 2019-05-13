DROP database IF EXISTS review_09;

CREATE database review_09;


USE review_09;

# Notes
-- Title, Body

CREATE TABLE notes
(
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR
  (250),
    body TEXT
);

  INSERT INTO notes
    (title, body)
  VALUES('My first note', 'The body of my note');

  INSERT INTO notes
    (title, body)
  VALUES('My second note', 'The body of my second note');

  -- INSERT INTO notes
  --   (title, body)
  -- VALUES('My second note again', 'The body of my second  2nd note');
