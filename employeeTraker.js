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

// Function to handle with the add DEPARTMENT choice
const departmentAuctionAdd = () => {

};

// Function to handle with the add ROLE choice
const roleAuctionAdd = () => {

};

// Function to handle with the add EMPLOYEE choice
const employeeAuctionAdd = () => {

};

// Function to handle with the add DEPARTMENT choice
const departmentAuctionAdd = () => {

};

// Function to handle with the add ROLE choice
const roleAuctionAdd = () => {

};

// Function to handle with the add EMPLOYEE choice
const employeeAuctionAdd = () => {

};

// Function to handle with the add DEPARTMENT choice
const departmentAuctionView = () => {

};

// Function to handle with the add ROLE choice
const roleAuctionView = () => {

};

// Function to handle with the add EMPLOYEE choice
const employeeAuctionView = () => {

};


// Function to handle with the update EMPLOYEE ROLE choice
const employeeAuctionUpdate = () => {

};

// Connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    // If the connection is successfull then log
    console.log('There you go!');
})

