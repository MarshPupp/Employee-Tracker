const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('./connection');

function viewDepartment() {
    connection.query('SELECT * FROM departments', (error, results) => {
        if (error) throw error;
        connection.table(results);
        mainMenu();
    });
}

function viewRoles() {
    connection.query('SELECT * FROM roles', (error, results) => {
        if (error) throw error;
        connection.table(results);
        mainMenu();
    });
}

function viewEmployees() {
    connection.query('SELECT * FROM employees', (error, results) => {
        if (error) throw error;
        connection.table(results);
        mainMenu();
    });
}

function addDepartment() {

}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateEmployeeRole(){

}

function mainMenu(){

}