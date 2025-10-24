let listaDeNumeroSorteados = [];
let numeroLimite = 10;let 
numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'brazilian Portuguese Female', {rate:1.2});
}
    
function exibirMensagemInicial() {
   exibirTextoNaTela('h1', 'Jogo do número secreto');
   exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
} 

exibirMensagemNaTela();

function verificarChute() {
   let chute = document.querySelector('input').value;

   if (chute == numeroSecreto) {
      exibirTextoNaTela('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = 'Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!';
      exibirTextoNaTela

   }else {







   }
} 