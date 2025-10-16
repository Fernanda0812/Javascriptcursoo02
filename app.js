let numeroSecreto = gerarNumeroALeatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag)
campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
   let chute = document.querySelector('input').value;
   
   if (chute == numeroSecreto) {
       exibirTextoNaTela ('h1', 'Acertou!');
       let mensagemTentativas = "Você descobriu o número secreto com ${tentativas} tentativas!"
       exibirTextoNaTela ('p1', 'Você descobriu o número secreto!');
    exibirTextoNaTela ('p', mensagemTentativas);
    } else {
    if (chute > numeroSecreto) {
        exibirTextoNaTela ('p', 'O múmero secreto é menor');
    } else {
        exibirTextoNaTela('p' 'O número secreto é maior');
    }






    }
        
    


   function gerarNumeroALeatorio() {
     return parseInt(Math.random() * 10 + 1);
   }