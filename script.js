function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}
function equal(){
    exp = document.form.textview.value;
    if(exp){
       document.form.textview.value = eval(exp);
}
}
function c(){
    document.form.textview.value = "";
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}
function insert2() {
 
 var raizDados = document.querySelector('#raizData')
 var raizDadosNumber = parseFloat(raizDados.value)
  
 var selectOutput = document.querySelector('#raizResultado')
 
  var resolveRaiz = Math.sqrt(raizDadosNumber)
  
selectOutput.innerHTML = selectOutput.innerHTML + resolveRaiz
  
}
function insert3() {
 var raizDados = document.querySelector('#raizData')
 var raizDadosNumber = parseFloat(raizDados.value)
  
 var selectOutput = document.querySelector('#raizResultado')
 
  var resolveRaiz = Math.sqrt(raizDadosNumber)
        document.form.textview.value = document.form.textview.value + resolveRaiz;
    
  }

function limpar1() {
$("#limparRaiz").click(function(){
	$('#raizResultado').empty();
});


 }