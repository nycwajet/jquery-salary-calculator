console.log('JS');

$( document ).ready( readyNow )




appendEmployeeToDom();
$('#btn-submit').on('click', addEmployee);
$('#employeeTable').on('click', '#btn-delete', deleteEmployee);

let employeeData = [];


    function readyNow(){
        console.log('JQ');


   function addEmployee(firstName, lastName, idNumber, employeeTitle, employeeSalary){
    console.log('in addEmployee');
   let employeeData = {firstName, lastName, idNumber, employeeTitle, employeeSalary};
   console.log('New employee is', employee);
   employeeData.push(employee);
}


function appendEmployeeToDom(){
    console.log('in append to DOM');
let tableEntry = $('#employeeTable');
tableEntry.empty();
}
}
   





}


