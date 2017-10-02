$(document).ready(function() {
    $("#ocultar") .click(function(){
    	$(".coders") .hide();
    	
     });
});
$(document).ready(function() {
    $("#mostrar") .click(function(){
    	$(".coders") .show();
    	
     });
});



// ___________________________javascript




var chile4=document.getElementById("chile-4");
var lima5=document.getElementById("lima-5");
var lima6=document.getElementById("lima-6");
var select=document.getElementById("select");
select.onchange=function(){

	if (select.value=="chile4" ) {
		displayImage();
		chile4.style.display="block";

	}
	if (select.value=="lima5" ) {
		displayImage();
		lima5.style.display="block";

	}
	if (select.value=="lima6" ) {
		displayImage();
		lima6.style.display="block";

	}
	
}
function displayImage(){
	chile4.style.display="none";
	lima5.style.display="none";
	lima6.style.display="none";
}

