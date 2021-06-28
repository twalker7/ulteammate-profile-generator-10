//import fs and inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const body = require('./src/body');
const card = require('./src/card');
 
// import generateHTML FILE AND FUNCTION HERE TO BE CALLED OR JUST PLACE THE CODE HERE ?
const employees = [];
let id = 0;
const promptUser = ()=>{
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Enter employee name'
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter an email address'
        },
        {
        type: 'list',
        name: 'role',
        message: 'What is your role on the team?',
        choices: ['Manager', 'Engineer', 'Intern']
        }

    ]).then( async function(response1){
        id++; 
        switch (response1.role){
            case "Manager":
                await inquirer.prompt([
                   {
                       type: 'input',
                       name: 'officeNumber',
                       message: 'what is your office number?'
                   } 
                ]).then( function(response2){
                    const officeNumber = response2.officeNumber;
                    const manager = new Manager(response1.name, id, response1.email, officeNumber); //role is implied in each class constructor
                    employees.push(manager);
                });
                break;

            case "Engineer":
                await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is your GitHub link?'
                    } 
                 ]).then( function(response2){
                     const github = response2.github;
                     const engineer = new Engineer(response1.name, id, response1.email, github); //role is implied in each class constructor
                     employees.push(engineer);
                 });
                break;
            
            case "Intern":
                await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: 'Enter name of school'
                    } 
                 ]).then( function(response2){
                     const schoolName = response2.school;
                     const intern = new Intern(response1.name, id, response1.email, schoolName); //role is implied in each class constructor
                     employees.push(intern);
                 });
                break;
        }

    }).then(function(){
        addNext();
    })
}

const addNext = ()=>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Add another employee?',
            choices: ['yes','no']
        }
    ]).then(function(response){
        if(response.add ==='yes'){
            promptUser();
        }else{
            console.log('team construction is complete');
            completedTeam();
        }
    });
}
 function completedTeam( ){
     console.log(employees);
     let cards = '';
     employees.forEach(person=>{
        cards += card(person)
     });
   console.log(body(cards));

    fs.writeFileSync("dist/output.html", body(cards));
}

function init(){
//inster code to run the application/start prompting
promptUser();
}

init();