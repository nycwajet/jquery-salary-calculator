console.log('JS');

$( document ).ready( readyNow )




appendEmployeeToDom();
$('#btn-submit').on('click', addEmployee);
$('#employeeTable').on('click', '#btn-delete', deleteEmployee);

let employeeData = [];


    function readyNow(){
        console.log('JQ');

        function handleClick(event){
            event.preventDefault();
            let employeeData = $('.inputForm').val().toUpperCase();
            $('.inputForm').val('');

    console.log('Go inputs ', name, type);

    addPet(name, type);
    console.log('All Pets ', petList);

        }


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
   


