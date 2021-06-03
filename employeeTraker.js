// Call our dependencies inquirer and mysql
const mysql = require('mysql');
const inquirer = require('inquirer');

// Create a connection  information to sql employeeTraker_DB
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'root',
    database: 'employeeTraker_DB',
});

// Connect to the mysql server and sql database
connection.connect((err)=> {
    if (err) throw err;
    // If the connection is successfull then log
    console.log('There you go!');
})

