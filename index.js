// importante selecionar oq será utilizado primeiro
const display = document.getElementById('display');


// função para adicionar valor ao display
function addToDisplay(value) {

    if (value === '=') {
        display.value = eval(display.value);
          if (eval(display.value) == Infinity) { //eval converte a string e valor
                 display.value = '0';
          }
        
    } else if (value === 'C') {
        display.value = display.value.slice(0, -1); //.slice, método que extrai uma parte da string, (a(indice), (b)final)

    } else if (value === 'AC') {
        display.value = '';

    } else {
        display.value += value;
    }
}

// adiciona eventos de clique aos botões
document.querySelectorAll('.a').forEach(button => { //a forEach percorre todos os botões da calculadora e adiciona um ouvinte de eventos de clique a cada um
    button.addEventListener('click', function(event) {
        event.preventDefault(); //previne o comportamento padrão do link, o "a" no caso
        const value = this.textContent; //pega o valor do botão clicado
        addToDisplay(value); 
    });
});
