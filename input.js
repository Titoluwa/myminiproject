var $ = function(id){
    return document.getElementById(id);
}
var printe = function(id){
    var num = $(id).value; 
    var val = document.createTextNode(num);
    $("display").appendChild(val);
}
var solve = function(){
    var x = $('display').textContent;
    var equ = eval(x);
    $('display').innerHTML = equ;
}
// I want to be able to backspace the prevoiusly inputed number of figure
// var backspace = function(id){
//     var num = $(id).value; 
//     var val = document.createTextNode(num);
//     $('display').removeChild(val);
// }






// var enterData = function(){
//     $('file').style.display = 'block';
//     $('file').onclick(this);
// }
// var calculate = function(){
//     var num1 = Number($('num1').value);
//     var num2 = Number($('num2').value);
//     var add = num1 + num2;
//     var subtract = num1 - num2;
//     var multiply = num1 * num2;
//     var divide = num1 / num2;
//     var mod = num1 % num2;
//     if ($("operation").value == "+"){
//         return document.getElementById('result').innerHTML = add;
//     } else if ($("operation").value == "-"){
//         return document.getElementById('result').innerHTML = subtract;
//     } else if ($("operation").value == "*"){
//         return document.getElementById('result').innerHTML = multiply;
//     } else if ($("operation").value == "/"){
//         return document.getElementById('result').innerHTML = divide;
//     } else if ($("operation").value == "%"){
//         return document.getElementById('result').innerHTML = mod;
//     }
// }