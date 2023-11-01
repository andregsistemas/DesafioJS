const tituloPrincipal = document.querySelector('.titulo__principal');
const consoleBtn = document.querySelector('.button-console');
const alertBtn = document.querySelector('.button-Alert');

tituloPrincipal.innerHTML = 'Hora do Desafio!';

consoleBtn.addEventListener('click', function(){
    console.log("Botão de console acionado!");
})

alertBtn.addEventListener('click', () => {
    alert('Eu amo JS')
})

function exibirPrompt(){
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:');
    alert(`Eu estive em ${nomeDaCidade} e lembrei de você!`);
}

function soma(){
    let numeroA = parseInt(prompt('Digite o primeiro número para somar!'));
    let numeroB = parseInt(prompt('Digite o segundo número para somar!'));
    let soma = numeroA + numeroB;
    alert(`A some de ${numeroA} + ${numeroB} é igual a ${soma}`);
}
