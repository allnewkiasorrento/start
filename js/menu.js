

$(document).ready(function(){
  $(".logo").click
  	(function(){
    	$(".menu").slideToggle();
  });
});



$(function(){
   $(".logo").hover(function() {
         $(this).effect("shake", { times:3 }, 100);
   });
});



var BildListe = new Array();
 BildListe[0] = "../images/BG.jpg";
 BildListe[1] = "../images/Logo.png";
 BildListe[2] = "../images/Bg2.jpg";
 
var Bilder = new Array() 

function Vorladen01()
{
	for (i = 0; i < BildListe.length; i++){ 
	Bilder[i] = new Image();
	Bilder[i].src = BildListe[i];
 }
}
	
	Vorladen01();