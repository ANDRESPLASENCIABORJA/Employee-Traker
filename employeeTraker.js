// Call our dependencies inquirer and mysql
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

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

// At first we have to create a starter function to welcome the user to the program
// This function will have all the 3 choices that the user can take and when they chose one they will be redirected to the function of the selected choice
const start = () => {
    inquirer
        .prompt({
            name: 'homePage',
            type: 'list',
            message: 'Welcome to the Employee Traker app! What would you like to do today?',
            choices: ['Add Department', 'Add Role', 'Add Employee', 'View all Departments', 'View all Roles', 'View all Employees', 'Update Employee Roles'],
        })
        .then((answer) => {
            // Based on the user answer they can add a department with a department function or a role or an employee
            if (answer.homePage === 'Add Department') {
                departmentAuctionAdd();
            } else if (answer.homePage === 'Add Role') {
                roleAuctionAdd();
            } else if (answer.homePage === 'Add Employee') {
                employeeAuctionAdd();
            } else if (answer.homePage === 'View all Departments') {
                departmentAuctionView();
            } else if (answer.homePage === 'View all Roles') {
                roleAuctionView();
            } else if (answer.homePage === 'View all Employees') {
                employeeAuctionView();
            } else if (answer.homePage === 'Update Employee Roles') {
                employeeAuctionUpdate();
            } else {
                connection.end();
            }
        });
};

// Function to handle with the View all Departments choice
const departmentAuctionView = () => {
    connection.query('SELECT * from department', (err, data) => {
        if (err) throw err;
        console.table(data);
        console.table('Department:', data[0].name);
        // Prompt the starting questions to the user
        start();
    });
};

// Function to handle with the View all ROLES choice
const roleAuctionView = () => {
    connection.query('SELECT * from role', (err, data) => {
        if (err) throw err;
        console.table(data);
        console.table('Role:', data[0].title);
        // Prompt the starting questions to the user
        start();
    });
};

// Function to handle with the View all EMPLOYEE choice
const employeeAuctionView = () => {
    connection.query('SELECT * from employee', (err, data) => {
        if (err) throw err;
        console.table(data);
        console.table('Employee', data[0].first_name);
        // Prompt the starting questions to the user
        start();
    });
};

// Function to handle with the Add DEPARTMENT choice
const departmentAuctionAdd = () => {
    // Prompt to store information from the user
    inquirer
        .prompt([
            {
                name: 'departmentName',
                type: 'input',
                message: 'What is the new department name?'
            },
        ])
        .then((answer) => {
            // When finished prompting, insert the new item into the db table
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: answer.departmentName,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Your new department was successfully created');
                    // Prompt the starting questions to the user
                    start();
                }
            );
        });
};

// Function to handle with the add ROLE choice
const roleAuctionAdd = () => {
    // Prompt to store information from the user
    inquirer
        .prompt([
            {
                name: 'roleTitle',
                type: 'input',
                message: 'What is the new role title?'
            },
            {
                name: 'roleSalary',
                type: 'input',
                message: 'What is the new role salary?'
            },
            {
                name: 'in which department does the role goes?',
                type: 'input',
                message: 'What is the new department name?'
            },
        ])
        .then((answer) => {
            // When finished prompting, insert the new item into the db table
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: answer.departmentName,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Your new department was successfully created');
                    // Prompt the starting questions to the user
                    start();
                }
            );
        });
};

// Function to handle with the add EMPLOYEE choice
const employeeAuctionAdd = () => {
    // Prompt to store information from the user
    inquirer
        .prompt([
            {
                name: 'departmentName',
                type: 'input',
                message: 'What is the new department name?'
            },
            {
                name: 'departmentName',
                type: 'input',
                message: 'What is the new department name?'
            },
            {
                name: 'departmentName',
                type: 'input',
                message: 'What is the new department name?'
            },
            {
                name: 'departmentName',
                type: 'input',
                message: 'What is the new department name?'
            },
        ])
        .then((answer) => {
            // When finished prompting, insert the new item into the db table
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: answer.departmentName,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Your new department was successfully created');
                    // Prompt the starting questions to the user
                    start();
                }
            );
        });
};

// Function to handle with the update EMPLOYEE ROLE choice
const employeeAuctionUpdate = () => {

};

// Connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    // Run the start function after the connection is made to prompt the user
    start();
})

