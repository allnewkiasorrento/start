

$(document).ready(function () {
	$(".logo").click
		(function () {
			$(".menu").slideToggle();
		});
});



$(function () {
	$(".logo").hover(function () {
		$(this).effect("shake", { times: 3 }, 100);
	});
});



var BildListe = new Array();
BildListe[0] = "assets/images/bg.jpg";
BildListe[1] = "assets/images/logo.png";
BildListe[2] = "assets/images/bg.jpg";

var Bilder = new Array()

function Vorladen01() {
	for (i = 0; i < BildListe.length; i++) {
		Bilder[i] = new Image();
		Bilder[i].src = BildListe[i];
	}
}

Vorladen01();