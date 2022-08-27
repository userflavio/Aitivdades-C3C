function calculaTriangulo(){
	let ladoa = document.getElementById("ladoa").value;
	let ladob = document.getElementById("ladob").value;
	let ladoc = document.getElementById("ladoc").value;
	
	// definição do tipo de triângulo
	if (ladoa == ladob && ladoa == ladoc) {
		document.getElementById("res").value = 'Equilátero'
	}else if (ladoa != ladob && ladoa != ladoc && ladob != ladoc){
		document.getElementById("res").value = 'Escaleno'
	} else {
		document.getElementById("res").value = 'Isósceles'
	}
}
