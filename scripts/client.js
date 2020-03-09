console.log('JS');

$( document ).ready( readyNow )




appendEmployeeToDom();
$('#btn-submit').on('click', addEmployee);
$('#employeeTable').on('click', '#btn-delete', deleteEmployee);

let employeeData = [{firstName, LastName, idNumber, employeeTitle, employeeSalary}];


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


employeeData.push({ 'Henry', 'Marin', 12345, 'Who knows', 22000 });
employeeData.push({ 'John', 'Doe', 12346, 'Consultat', 42000 });
employeeData.push({ 'Maria', 'Hill', 00000, 's.h.i.e.l.d. agent', 22000 });

}
   


