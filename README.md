# Employee-Tracker

## Description ##
An application that allows you to create an employee database to keep track of all departments, roles and employees.

## Installation ##
To install this application you fist need to clone the repository from the link below and then access the integrated terminal. 
Once in the terminal run this command to install all needed dependencies.
```sh
npm install
```
After running the command edit the .env-example file to include your MySQL password and be sure to remove the "-example" from the file name.

Now you'll need to login to your MySQL shell using the command in the terminal.
```sh
mysql -u root -p
```
After you login you'll need to create the data base by entering this command in your MYSQL shell.
```sh
source db/schema.sql
```
From there the application will be ready to go but if you would like to test the application with the existing data you can run this command in your MYSQL shell.
```sh
source db/seeds.sql
```

## User Story ##
~~~
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
~~~
## Acceptance Criteria ##
~~~
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
~~~

## Links ##
Link to repository: https://github.com/MarshPupp/Employee-Tracker 

## Walkthrough ##
Here is the link to the walkthrough video: https://drive.google.com/file/d/1bA2RtJmxbjfaK8NwreVlUUHx2aAlelFD/view?usp=sharing 

## Acknowledgements ##
* MDN docs were referenced (https://developer.mozilla.org/en-US/)
* W3Schools were referenced (https://www.w3schools.com/css/default.asp)
* Chat GPT for Read Me format and help
