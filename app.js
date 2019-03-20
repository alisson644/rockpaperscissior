let scoreUser = 0;
let scoreComputer = 0;
const resultUser = document.getElementById("scoreUser");
const resultComp = document.getElementById("scoreComp");
const escolha = document.getElementsByClassName("escolha");
const getRandomchoice = () => Math.floor(Math.random() * 3);

function transform(escolha){
	if(escolha == "r") return "Pedra"
	if(escolha == "p") return "Papel"
	return "Tesoura"
}

function game(escolhaUser){
	let escolhaComp = escolha[getRandomchoice()].getAttribute("id");
	let jogada = escolhaUser + escolhaComp;
	
	switch(jogada){
		case "rs":
		case "pr":
		case "sp": 
			scoreUser++;
			resultUser.innerHTML = scoreUser;
			escolha[escolhaUser].classList.add("green-box");
			setInterval(() =>escolha[escolhaUser].classList.remove("green-box"), 300);
			document.getElementById("result").innerHTML = `Usuario escolheu ${transform(escolhaUser)} Computador escolheu ${transform(escolhaComp)} Você ganhou :)`;
			break;
		case "sr":
		case "rp":
		case "ps":
			scoreComputer++;
			resultComp.innerHTML = scoreComputer;
			console.log("Lost");
			escolha[escolhaUser].classList.add("red-box");
			setInterval(() =>escolha[escolhaUser].classList.remove("red-box"), 300);
			document.getElementById("result").innerHTML = `Usuario escolheu ${transform(escolhaUser)} Computador escolheu ${transform(escolhaComp)} Você Perdeu :(`;
			break;
		default: escolha[escolhaUser].classList.add("gray-box");
			setInterval(() =>escolha[escolhaUser].classList.remove("gray-box"), 300);
			document.getElementById("result").innerHTML = `Usuario escolheu ${transform(escolhaUser)} Computador escolheu ${transform(escolhaComp)} Você Empatou :|`;
	}
}

function main (){
	document.getElementById("r").addEventListener("click",() => game("r"));
	document.getElementById("s").addEventListener("click",() => game("s"));
	document.getElementById("p").addEventListener("click",() => game("p"));
}

main();