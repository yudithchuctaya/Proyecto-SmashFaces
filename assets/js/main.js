//function especificamente del juego
// $(function(){

	var i =0;
    var objet=[];
	var  score = 0;
	var nombre_imput = $('#ingresar_name');
    var comprobar = $('#comprobar');
    var puntos = 0;

    function randomImage(min, max) {
	  var numero = Math.random() * (max - min) + min;
	  var entero = Math.floor(numero);
	  return entero;
	};



// var sedes=[
// 	{
// 		pais:"mexico",
// 		coders:mexico

// 	},
// 		{
// 		pais:"peru",
// 		coders:peru

// 	},

// 	{
// 		pais:"chile",
// 		coders:chile

// 	}];

//imagenes aleatorias

//  var imagenes = sedes [Math.floor(Math.random() * imagen.length)];
//  var newImagen= imagen.split(" ");
//   console.log(newImagen);

//    return newImagen;


$("select").change(function(e){ 
  e.preventDefault();
  var option = $('#select').val();
  if(option == "peru"){
    $('#fotos-mexico').addClass("none");
    $('#fotos-peru').toggleClass("none");
     $('#fotos-chile').toggleClass("none");
  }else {
    $('#fotos-peru').addClass("none");
    $('#fotos-mexico').toggleClass("none");
     $('#fotos-chile').toggleClass("none");
  }
});




  // var parent = $('<div class="col-md-10 black></div>');
  // var imgContainer = $('<div class="col-md-4 selection></div>');
  // var formComplet = $('<div class="col-md-4 complet form-group"></div>');
  // var puntaje = $('<p class="score-punt">Puntos:<span class="puntaje"  id="score"> 0 </span>puntos</p>');
  // var label = $('<label for="usr">Ingrese su nombre:</label>');
  // var input = $('<input type="text" class="form-control" id="ingresar_name" placeholder="nombre"><br><br>');
  // var button = $('<button  type="button" class="btn" id="comprobar">COMPROBAR</button>');
  // var alerta = $('<p class="alert"></p>');
  

 
  // formContainer.append(label);
  // formContainer.append(input);
  // formContainer.append(button);
  // formContainer.append(alerta);
  //  formContainer.append(puntaje);
  // parent.append(formComplet);
var imagenRandom = function (max,min){

$(function(){
   var imgPeru= $('#fotos-peru');
   var contenedorImg = $('<div class="contenedorImg col-md-12"></div>');
   var img = $('<img src="" alt=""  class="img-circle img-thumbnail">');
    // imgContainer.append(foto);

     img.attr("src", 'assets/img/perubian/' + perubian[i].imagen);
     img.attr("alt",perubian[i].nombre);
     imgPeru.append(contenedorImg);
     contenedorImg.append(img);

     comprobar.click(function(e){
       e.preventDefault();
       if(nombre_imput.val().toLowerCase() == perubian[i].nombre.toLowerCase()){
         alert("Muy bien, has ganado 5 puntos.");
         puntos = puntos + 5;
         i++;
         $('#score').html("<strong>"+ puntos +"</strong>");
         setTimeout(function () {
           img.attr("src", 'assets/fotos/perubian/' + perubian[i+1].imagen);
           img.attr("alt",perubian[i+1].nombre);
           contenedorImg.append(img);
           imgPeru.append(contenedorImg);
         },3000);
       }else {
         alert("Sigue intentando.");
       }
     });

   return imgPeru;
 });

// para imagenes de mexico
$(function(){
  var imgMexico= $('#fotos-mexico');
  var contenedorImg = $('<div class="contenedorImg col-md-12"></div>');
  var img = $('<img src="" alt=""  class="img-circle img-thumbnail">');

     img.attr("src", 'assets/img/mexico/' + mexico[i].imagen);
     img.attr("alt",mexico[i].nombre);
     imgMexico.append(contenedorImg);
     contenedorImg.append(img);

     // comprobar.click(function(e){
     //   e.preventDefault();
     //   if(nombre_imput.val().toLowerCase() == fotos-mexico[i].nombre.toLowerCase()){
     //     alert("Muy bien, has ganado 5 puntos.");
     //     puntos = puntos + 5;
     //     i++;
     //     $('#score').html("<strong>"+ puntos +"</strong>");
     //     setTimeout(function () {
     //       img.attr("src", 'assets/fotos/mexico/' + mexico[i+1].imagen);
     //       img.attr("alt",imgMexico[i+1].nombre);
     //       contenedorImg.append(img);
     //       imgMexico.append(contenedorImg);
     //     },3000);
     //   }else {
     //     alert("Sigue intentando.");
     //   }
     // });

   return imgMexico;
 });



// var aleatorio = Math.floor(Math.random() * (– 1 + 1)) + 1;
//  var imagenes = Mexico||Peru|| Chile [Math.floor(Math.random() * imagen.length)];
//  var newImagen= imagen.split(" ");
//   console.log(newImagen);

//    return newImagen;


}



// agregar la imagen al seleccionar la sede



// $("select").click(function(){
//         $(",complet").append();
//     });

// });







// oculta las mimagenes y  si  desea  lo  esconde 
// $(document).ready(function() {
//     $("#ocultar") .click(function(){
//     	$("#coders") .hide();
    	
//      });
// });
// $(document).ready(function() {
//     $("#mostrar") .click(function(){
//     	$("#coders") .show();
    	
//      });

// });



// // ___________________________javascript

// var perubian=document.getElementById("peru");
// var mexic=document.getElementById("mexico");
// var chil=document.getElementById("chile");
// var select=document.getElementById("select");
// select.onchange=function(){

// 	if (select.value=="perubian" ) {
// 		displayImage();
// 		perubian.style.display="block";

// 	}
// 	if (select.value=="mexic" ) {
// 		displayImage();
// 		mexic.style.display="block";

// 	}
// 	if (select.value=="chil" ) {
// 		displayImage();
// 		chil.style.display="block";
// 	}	
// }
// function displayImage(){
// 	perubian.style.display="none";
// 	mexic.style.display="none";
// 	chil.style.display="none";
// }



// $(document).ready(function(){
// 	$("select[name=coders]").change(function(){
//             $('#peru').val($(this).val());
            
//         });
// 	$("select[name=coders]").change(function(){
//             $('#chile').val($(this).val());
           
//         });
// 	$("select[name=coders]").change(function(){
//             $('#mexico').val($(this).val());
            
//         });	
// });




