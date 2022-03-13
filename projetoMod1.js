console.clear();
const prompt = require('prompt-sync')();
let continuar = "S"

while(continuar == "S"){

console.log("Preparando o café da manhã.");
console.log();
console.log("Hoje é o primeiro dia de casados de Phil e Claire, ajude o Phil a preparar um café da manhã incrível para sua esposa!(Responda com [S/N])(Caso escolha não responder, será contabilizado como incorreto.)");
console.log();
console.log("Obs: Não se esqueça, Claire é intolerante a Lactose.");
console.log();

let venceu = 0;
let perdeu = 0;

//Pergunta1
const pergunta1 = prompt("Phil deve começar o seu prato preparando ovos com bacon? [S/N]").toUpperCase()

if (pergunta1 == "S"){ venceu++ }
else if (pergunta1 == "N"){ perdeu++
} else {perdeu++}

//Pergunta2
const pergunta2 = prompt("Phil deve servir torradas com ricota? [S/N]").toUpperCase()

if (pergunta2 == "S"){ perdeu++ }
else if (pergunta2 == "N"){ venceu++
} else {perdeu++}

//Pergunta3
const pergunta3 = prompt("Iogurte seria uma ótima pedida? [S/N]").toUpperCase()

if (pergunta3 == "S"){ perdeu++ }
else if (pergunta3 == "N"){ venceu++
} else {perdeu++}

const pergunta4 = prompt("O próximo passo seria servir café forte? [S/N]").toUpperCase()

//Pergunta4
if (pergunta4 == "S"){ venceu++ }
else if (pergunta4 == "N"){ perdeu++
} else {perdeu++}

//Pergunta5
const pergunta5 = prompt("Para fechar o café da manhã e oferecer um ótimo dia, sorvete seria ideal? [S/N]").toUpperCase()

if (pergunta5 == "S"){ perdeu++ }
else if (pergunta5 == "N"){ venceu++
} else {perdeu++}

const ganhador = venceu

if (ganhador == 5){ (console.log("\nVocê Conseguiu! Claire amou o café da manhã, vocês já se veem felizes para sempre numa casa com 3 filhos!")) 
} else if (ganhador == 4){ (console.log("\nMesmo você cometendo um pequeno deslize no café da manhã, Claire não parece se importar, tudo correu bem!")) 
} else if (ganhador == 3){ (console.log("\nFoi por pouco, mas Claire acaba não gostando do café da manhã, mesmo assim ela releva o acontecido.")) 
} else if (ganhador == 1 || ganhador == 2){ (console.log("\nClaire acaba não gostando do café da manhã e menos do fato de você ter esquecido sua intolerãncia a lactose.")) 
} else { (console.log("\nTudo foi um desastre, Claire começa a se arrepender do casamento, você não consegue nem se lembrar de sua intolerância a lactose, os papéis do divórcio começaram a ser preparados.")) 
}

console.log();
console.log(`Você respondeu ${venceu} perguntas corretamente`);
console.log(`Você respondeu ${perdeu} perguntas incorretamente`);
console.log();

continuar = prompt(`Deseja jogar novamente? [S/N]`).toUpperCase()
  while (continuar != "S" && continuar != "N"){
    continuar = prompt(`Deseja jogar novamente? [S/N]`).toUpperCase()
  }
}
console.log("Fim de Jogo!!!");