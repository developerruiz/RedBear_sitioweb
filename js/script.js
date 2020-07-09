let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
	let Desplazamiento_Actual = window.pageYOffset;
	if(ubicacionPrincipal >= Desplazamiento_Actual){

		document.getElementById('navbar').style.top = '0px';

		document.getElementById('navbar').style.background='rgba(53, 136, 50, 0.84);';
	}
	else{
		document.getElementById('navbar').style.top ='-80px';
		document.getElementById('navbar').style.background='rgba(53, 136, 50, 0.84);';
	}
	ubicacionPrincipal = Desplazamiento_Actual;
}


