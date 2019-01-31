var altura = 0;
var largura = 0;
var vidas = 1;

function ajustaTamanhopalcoJogo() {
	 altura = window.innerHeight;
	 largura = window.innerWidth;

	 console.log(altura, largura);
}

ajustaTamanhopalcoJogo();

function posicaoRandomica() {

//remover o zombie anterior caso exista
if(document.getElementById('zombie1'))
{
	document.getElementById('zombie1').remove();

	if(vidas > 3){
		alert("Game over");
	}
	else{
		document.getElementById('v'+ vidas).src = 'img/itens/corazion_vazio.png';

	vidas++;
	}

}
	
var posicaoX = Math.floor(Math.random() * altura)-90;
var posicaoY = Math.floor(Math.random() * largura)-90;

//para evitar que a posição - retire a imagem da janela visivel 
posicaoY = posicaoY < 0 ? 0 : posicaoY;
posicaoX = posicaoX < 0 ? 0 : posicaoX;

//criando um elemento html
var zombie = document.createElement('img');
zombie.src = 'img/zombie.png';
zombie.className = tamanhoAleatorio() + ' '+ ladoAleatorio();
zombie.style.left=posicaoX+'px';
zombie.style.top=posicaoY + 'px';
zombie.style.position='absolute';
zombie.id ='zombie1';
zombie.onclick = function clickZombie() {
	this.remove();
	// body...
}

//incluindo os elementos no body da página
document.body.appendChild(zombie);
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random()*3);

	switch(classe){
		case 0: 
		return 'zombie1';
		 case 1:
		 return 'zombie2';
		 case 3:
		 return 'zombie3';
	}
}

function ladoAleatorio(){
		var classe = Math.floor(Math.random()*2);

	switch(classe){
		case 0: 
		return 'ladoA';
		 case 1:
		 return 'ladoB';
		
	}
}