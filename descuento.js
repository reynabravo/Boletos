// JavaScript Document
var cosp=0, cosf=0, op;
function descuento(){
cosp=parseFloat(document.getElementById("textCosto").value);
op=document.getElementById("textOpc").value;
switch(op){
	case '1': 
	case '2':
	case '3':
	cosf=cosp/2;
	document.getElementById("textResul").value=cosf;
	break;
	case '4': 
	cosf=(cosp/4)*3;
	
	document.getElementById("textResul").value=cosf;
	break;
	default:
	alert("opción no valida");
	document.getElementById("textResul").value="";
	break;
	
}
}