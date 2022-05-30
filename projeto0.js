const prompt = require("prompt-sync")();
console.clear();
const info = 'Responda as perguntas apenas com "sim" ou "não".';

const arrayPerguntas = ['Você viu o bolo na mesa?',
                        'Você reparou alguma coisa no bolo?',   
                        'O bolo veio com cereja?',
                        'Você passou o dedo no bolo?',
                        'A cobertura era de chocolate?']

console.log('Olá!Como você se chama?');
const nomejogador = prompt('');

let frase = "De acordo com as perguntas o " + nomejogador;

console.log('');
console.log('Gostaria de jogar o jogo chamado Detetive?')
console.log(info);
let resposta1 = prompt('').toLowerCase();
console.log();

while(resposta1 != 'sim' && resposta1 != 'nao') {
    console.log('Desculpe, sua resposta não faz sentido!');
    console.log(info);
    console.log('Gostaria de jogar o jogo chamado Detetive?')
    resposta1 = prompt('').toLowerCase();
    console.log();
}

if(resposta1 == 'sim') {
    console.clear();
    console.log('Iniciaremos as perguntas.');
    console.log();
    
    let qtdSim = 0;


    for(let i = 0; i < arrayPerguntas.length; i++) { 
        console.log(arrayPerguntas[i]);
        let resposta = prompt('').toLowerCase();


        while(resposta != 'sim' &&  resposta != 'nao') {
            console.log('Desculpe, sua resposta não faz sentido!');
            console.log(info);
            console.log(arrayPerguntas[i]);
            resposta = prompt('').toLowerCase();
            console.log();
        }   
        
        if (resposta == 'sim') {
            qtdSim++;
        }
    };

    console.log();
    console.clear();
    
    if (qtdSim >= 4) {
        console.log(frase + ' Passou o dedo no bolo!');
    } else if (qtdSim == 3) {
        console.log(frase + ' Pode ter passado o dedo no bolo!');
    } else {
        console.log(frase + ' Não passou o dedo no bolo!');
    };
    
} 