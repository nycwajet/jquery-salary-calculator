console.log('JS');

$( document ).ready( readyNow )

let employeeData = [];

    function readyNow(){
        console.log('JQ');

function appendEmployeeToDom(){
let tableEntry = $('#employeeTable');

tableEntry.empty();

for ( item of employeeDtata){
    let $td= $('
    <tr>
    <td>${item.firstName}</td>
    <td>${item.lastName}</td>
    <td>${item.idNumber}</td>
    <td>${item.employeeTitle}</td>
    <td>${item.employeeSalary}</td>
    </tr>'
    );

    tableEntry.append($td);
}
   
}





}


