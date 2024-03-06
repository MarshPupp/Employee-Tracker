const inquirer = require('inquirer');
const connection = require('./db/connection');

connection.connect((err) => {
    if (err) throw err;
    console.log('connected to database.');
    mainMenu()
})

function viewDepartment() {
    connection.query('SELECT * FROM department', (error, results) => {
        if (error) throw error;
        console.table(results);
        mainMenu();
    });
}

function viewRoles() {
    connection.query('SELECT * FROM roles', (error, results) => {
        if (error) throw error;
        console.table(results);
        mainMenu();
    });
}

function viewEmployees() {
    connection.query('SELECT * FROM employees', (error, results) => {
        if (error) throw error;
        console.table(results);
        mainMenu();
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Department name:'
        }
    ]).then(answer => {
        connection.query('INSERT INTO department SET ?', answer, (error, results) => {
            console.log('Department added successfully');
            mainMenu();
        });
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter Role title:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter Role salary:'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter Role Department id:'
        }
    ]).then(answer => {
        connection.query('INSERT INTO roles SET ?', answer, (error, results) => {
            console.log('Role added successfully');
            mainMenu();
        });
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "Enter the Employee's first name:"
        },
        {
            type: 'input',
            name: 'last_name',
            message: "Enter the Employee's last name:"
        },
        {
            type: 'input',
            name: 'roles_id',
            message: "Enter the Employee's role:"
        },
        //{type: 'input', name: 'manager_id', message: "Enter Employee's Manager id:"}
    ]).then(answer => {
        console.log(answer);
        connection.query('INSERT INTO employees SET ?', answer, (error, results) => {
            console.log('Employee added successfully');
            console.log(error, results);
            mainMenu();
        });
    });
}

function updateEmployeeRole(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'employees_id',
            message: "What is the Employee's id number:"
        },
        {
            type: 'input',
            name: 'roles_id',
            message: "What is the Employee's new role:"
        }
    ]).then(answer => {
        const newRoleId = parseInt(answer.roles_id);
        const getEmployee = parseInt(answer.employees_id);

        connection.query(
            'UPDATE employees SET roles_id = ? WHERE id = ?',
            [newRoleId, getEmployee],
            (error, results) => {
                if (error) {
                    console.log('Could not update employee role',error);
                    mainMenu();
                    return;
                }
                console.log('Employee role updated successfully')
                mainMenu();
            }
        );
    });
}

function mainMenu(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Select an option:',
            choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
            ]
        }
        ]).then(answer => {
        switch (answer.option) {
            case 'View all departments':
            viewDepartment();
            break;
            case 'View all roles':
            viewRoles();
            break;
            case 'View all employees':
            viewEmployees();
            break;
            case 'Add a department':
            addDepartment();
            break;
            case 'Add a role':
            addRole();
            break;
            case 'Add an employee':
            addEmployee();
            break;
            case 'Update an employee role':
            updateEmployeeRole();
            break;
            default:
            console.log('Invalid option');
            break;
        }
    });
}