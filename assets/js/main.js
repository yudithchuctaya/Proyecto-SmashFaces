
//function especificamente del juego
$(function(){
  swal("EMPEZEMOS EL JUEGO", "Listo!");
  var indice;
  var inicial=[];
  var num_Click=0;



  //seleccion de sede


var  imagenAleatoria = function(array){
  if ( inicial.length < array.length) {
     while(inicial.length < array.length) {
        var numeroAleatorio=Math.floor(Math.random()* array.length);
       // swal("Bien,ingresaste la sede" + );
       if (inicial.indexOf(numeroAleatorio)==-1) {
        inicial.push(numeroAleatorio);
        console.log(inicial);
        return numeroAleatorio;
       }
     }
    }else {
      swal("JUEGO FINALIZADO");
    }
}


var mostrarImagenes =function ( sede,contenedor,array){

    var indice = imagenAleatoria(array); //---------la funcion generarAleatorio le almacena solo en una variable que es indice.
  
    mostrarImgs.attr("src","assets/img/"+sede+" /"+array[indice].image);//obtiene  el valor del atributo "src" de  la imagen 
     var puntaje = $("#puntaje");
     var mensaje= $(".mensaje"); //almacena en una variable  el  id de puntaje y el mensaje  que  es de acuerdo ... 
    // var mensaje = ("bien");
    $("form").submit(function(e){  //evento de envio  donde se registra o  lo  guarda  para luego  comprobar con el botton y
    //  ahi  se ejecuta una funcion a ejecutarse..y de acuerdo  a  cada  envio  el contador  de click se incrementa 
      num_Click++;
      e.preventDefault();//------------------------evita que  realice la accion  de la funcion 
      //------------------------------------- crea  una variable donde identifica el nobre insertado
      var nombre = $("input:text");
      //si adivinas el nombre contClick=0; sumas 5 puntos
      if(nombre.val().toLowerCase() === array[indice].name.toLowerCase()){ //toLowerCase: devuelve minusculas a la cadena.
        num_Click=0;
       nombre.val("");
        puntaje.text(eval(puntaje.text())+5);
        mensaje.text( ".) Excelente Acertaste la Respuesta","success");
          setTimeout(function(){
            indice = generarAleatorios(array);
            mostrarImgs.attr("src","assets/img/"+sede+"/"+array[indice].image);
            mensaje.text("");
          },1000);
                                  
      }else{
        if(num_Click <= 4){
         nombre.val("");
          $(".mensaje").text(":| Sigue Intentando");  
          }else{
              num_Click=0;
              nombre.attr("disabled", true);
              //setTimeout          

              setTimeout(function(){
                indice = imagenAleatoria(array);
                mostrarImgs.attr("src","assets/img/"+sede+"/"+array[indice].image);
                mensaje.text("");
                nombre.attr("disabled", false);
                nombre.val("");
              },2000);          
              
              puntaje.text(eval(puntaje.text())-1);;
           } 
         }

      });

     };
       var mostrarImgs=$("img");
          $("select").on("change", function(){
            sede = $(this).val();
            $(this).parent().next().show();
            
            if(sede ==="mexico"){
              mostrarImagenes(sede,mostrarImgs, mexico);
              inicial= [];
            }else{
              mostrarImagenes(sede,mostrarImgs, chile);
              inicial= [];
            }
      });
}); 

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








