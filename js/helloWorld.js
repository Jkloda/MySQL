/* Julai Kloda, 11/02/2021 */
/* Project description, version: */

//document.write("Hello World!");
var name;
name = prompt("Enter your name here");
document.write(`Hello ${name}`);
document.write(`Your overtime pay is ${resultovertime}`);
//document convert cm to inches
var cmToi = 0.393700787;
var pToKg = 2.205
function convert(){
    var cTemp = document.getElementById('data').value;
var cToFahr = (cTemp * 1.8) + 32;
document.getElementById('res').innerText = '${cTemp} C=${cToFahr} F';
} 
  
alert('Welcome to the conversion program');

console.log('(1) Centimeter to inches');
console.log('(2) Pounds to Kilograms');


var userInput = prompt('Enter the number for selecting one of these.\n1 if you want convert centimeter to inches. \n2 if you want convert pounds to kilogrames. \n3 if calculate the payment. \n4 if calculate overtime paymen. ');

switch (userInput) {
    case '1':
    var input = prompt('Input the value you want to convert');
    var result = input * cmToi;
    alert(input + ' Centimeter is equel to: ' + result + ' inches');
    break;
    case '2':
    var input = prompt('Input the value you want to convert');
    var result = input / -pToKg;
    alert(input + ' Pounds is equel to: ' + result + ' Kilogrames');
    break;
    case '3':
        var input = prompt('How many hours a week?');
        var normalpay = prompt('Input your basic rate pay per hour');
        var resultnoramlpay = input * normalpay;
        alert(' Your basic pay: ' + resultnoramlpay );
        break;
    case '4':
        var input = prompt('How much overtime do you have?');
        var overtimepay = prompt('Input your overtime rate pay per hour');
        var resultovertime = input * overtimepay;
        alert(' Your overtime pay: ' + resultovertime );
    break;

default:
    function convert(){
    var cTemp = document.getElementById('data').value;
var cToFahr = cTemp * 9/5 + 32;
document.getElementById('res').innerText = '${cTemp} C=${cToFahr} F';
 
}
}
