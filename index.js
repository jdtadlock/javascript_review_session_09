const mysql = require('mysql');

// Packages are typically Objects or Constructors(Object creator)
const db = mysql.createConnection({
  // host: 'localhost' <--- default
  user: 'root',
  password: '',
  database: 'review_09'
});

const word = process.argv[2];
const limit = process.argv[3];

// console.log(input);


db.connect((error, b) => {
  if (error) throw error;
  // return console.log(error);
  // const output = `'%${word}%'`;
  // console.log(output);
  // `SELECT * FROM notes WHERE body LIKE '%blah%' LIMIT 1`
  db.query(`SELECT * FROM notes WHERE body LIKE ? LIMIT ?`,
    ['%' + word + '%', parseInt(limit)],
    (err, result) => {
      if (err) throw err;
      // result is array
      for (let i = 0; i < result.length; i++) {
        let note = result[i];
        console.log(`
        ID: ${note.id}
        Title: ${note.title}
        Body: ${note.body}
      `);
      }

      // console.log(result);
    });

});



const str = 'My awesome string';

// console.log(str);

const full_str = str + ' and this is more text';

// console.log(full_str);

const add = 'add me to this string';

const es6_str = `new ${add} string is sweet!`; // Template Literal 

// console.log(es6_str);




