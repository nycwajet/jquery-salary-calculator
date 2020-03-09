console.log('In JS');


$(document).ready(readyNow)

let employees = [];

function readyNow(){
  console.log('in JQ');
  $('#btn-submit').on('click', AddEmployee)
  $('#employeeTableOut').on('click', 'delete', removeRow);
}
function addEmployee(event){
console.log('in addEmployee');
event.preventDefault();

let firstNameInput= $('#fNameInput').val();
let lastNameInput= $('#lNameInput').val();
let idInput= $('#idNumInput').val();
let titleInput= $('#eeTitleInput').val();
let salaryInput=$('#eeSalaryInput').val();

employee.push({firstNameInput,lastNameInput,idInput,titleInput,salaryInput});
console.log('employees array is: ',employees);

employeeData();

$('#fNameInput').val('');
$('#lNameInput').val('');
$('#idNumInput').val('');
$('#eeTitleInput').val('');
$('#eeSalaryInput').val('');

}

function employeeData(){
console.log('in employeeData');
$('#employeeTableOut').empty();

for(let employee of employees){


  const row = '<tr>
  <td>${employee.fNameInput}</td>
  <td>${employee.lNameInput}</td>
  <td>${employee.idNumInput}</td>
  <td>${employee.eeTitleInput}</td>
  <td>${employee.eeSalaryInput}</td>
  <td><button class= "button" id= "${employee.idNumInput}">Delete</button></td>
  </tr>' ;

  $('#employeeTableOut').append(row);
}

monthlySalary = eeSalaryInput/12;
$('#monthlyCost').empty();
$('#monthlyCost').append(monthlySalary);

if (totalMonthly > 20000) {
  monthlyStyle = 'red';
  
}

function removeRow(event){
  $(this).parent().parent().remove();

  const employeeId = S(this).attr('id');
  for (let i = 0 ; i < employees.length; i++){
    if(employe[i].idInput === employeeId){
      employees.splice(i,1);
    }

  }
  console.log('Employees[] is ', employees);
  displayEMployees();

}


