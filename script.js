
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

function insertPorCento() {
  
   var porcentagemNumDados = document.querySelector('#porcentoDataNum')
 var porcentagemDadosNumber = parseFloat(porcentagemNumDados.value)
  
    var porcentagemDados = document.querySelector('#porcentoData')
 var porcentagemDadosValue = parseFloat(porcentagemDados.value)
  
 var resolvePorcentagemDadosValue = porcentagemDadosValue / 100
 

 var selectOutput = document.querySelector('#porcentoResultado')
 
  var resolvePorcentagem = porcentagemDadosNumber * resolvePorcentagemDadosValue

  
selectOutput.innerHTML = selectOutput.innerHTML + resolvePorcentagem
  
  
}           
          
function limparPorcento() {
  
  $("#limparPorcento").click(function(){
	$('#porcentoResultado').empty();
});

}

function insertCalcPorc() {
     var porcentagemNumDados = document.querySelector('#porcentoDataNum')
 var porcentagemDadosNumber = parseFloat(porcentagemNumDados.value)
  
    var porcentagemDados = document.querySelector('#porcentoData')
 var porcentagemDadosValue = parseFloat(porcentagemDados.value)
  
 var resolvePorcentagemDadosValue = porcentagemDadosValue / 100
 

 var selectOutput = document.querySelector('#porcentoResultado')
 
  var resolvePorcentagem = porcentagemDadosNumber * resolvePorcentagemDadosValue
  
  
          document.form.textview.value = document.form.textview.value + resolvePorcentagem;
  
  
}
