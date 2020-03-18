console.log('In JS');


$(document).ready(readyNow)

let employees = [];

function readyNow(){
  console.log('in JQ');
  $('#btn-submit').on('click', addEmployee);
  $('#employeeTableOut').on('click', '.delete', removeRow);

}

function addEmployee(event){
console.log('in addEmployee');
event.preventDefault();

let firstNameInput= $('#fNameInput').val();
let lastNameInput= $('#lNameInput').val();
let idInput= $('#idNumInput').val();
let titleInput= $('#eeTitleInput').val();
let salaryInput=$('#eeSalaryInput').val();

let employee = ({firstNameInput,lastNameInput,idInput,titleInput,salaryInput});
employees.push(employee);
console.log('employees array is: ',employees);

appendEmployeeToDOM(employee);

$('#fNameInput').val('');
$('#lNameInput').val('');
$('#idNumInput').val('');
$('#eeTitleInput').val('');
$('#eeSalaryInput').val('');

}

function appendEmployeeToDOM(person){
console.log('in adding to DOM');
$('#employeeTableOut').empty();

  const row = `<tr>
  <td>${person.firstNameInput}</td>
  <td>${person.lastNameInput}</td>
  <td>${person.idInput}</td>
  <td>${person.titleInput}</td>
  <td>${person.salaryInput}</td>
  <td><button class= "delete" id= "${person.idInput}">Delete</button></td>
  </tr>` 

  $('#employeeTableOut').append(row);
  calculateMonthly();
  removeRow();
  
}


function calculateMonthly(){
  console.log('In Monthly');
  let total = 0;
  for (let i = 0; i < employees.length; i++){
    total += Number(employees[i].salaryInput);
  }
  total = total/12;
  console.log(total);
  $('#monthlyTotal').append(total);
}

function removeRow(){
  $(this).closest('tr').remove();

  const idInput = $(this).attr('id');
  for (let i = 0 ; i < employees.length; i++){
    if(employees[i].idInput === idInput){
      employees.splice(i,1);
    }

  }
}

