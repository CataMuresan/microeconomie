let lungime = prompt("cate elemente sunt?");
let produs = 1;
let input;
let inputModificat;


for(var i = 1; i<=lungime; i++){
	input = prompt("valoarea " + i);
	inputModificat = (100 + Number(input))/100;
	produs *= inputModificat;

}

function ProdusFinal(){
	var produsFinal = produs * 100 - 100;
	return produsFinal;
}

alert(ProdusFinal() + "%");