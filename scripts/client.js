console.log('JS');

$( document ).ready( readyNow )

let employeeData = [{firstName, lastName, idNumber, employeeTitle, employeeSalary}];

    function readyNow(){
        console.log('JQ');


$('.inputForm').click(function(addEmployee){
    let $item = $(this).closest('tr')
                       .find('.nr')
                       .text();
        $(this).append($item);
})

$('#btn-submit').on('click', addEmployee);
$('#employeeTable').on('click', '#btn-delete', deleteEmployee);



function appendEmployeeToDom(){
let tableEntry = $('#employeeTable');

tableEntry.empty();

for (item of employeeData){
    let $td=$('
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


