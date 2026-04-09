// Variáveis globais para a calculadora
let ligada = false;
let resultado = 0; // Variável para armazenar o resultado da operação atual
let historico = []; // Array para armazenar o histórico de cálculos
const num1Input = document.getElementById("num1"); // Pega o elemento de input do número 1 do HTML e armazena em uma variável para poder usar depois
const num2Input = document.getElementById("num2");
const operadorInput = document.getElementById("operador"); // Pega o elemento de select do operador do HTML e armazena em uma variável para poder usar depois
const calcularBtn = document.getElementById("btnCalcular"); // Pega o elemento do botão de calcular do HTML e armazena em uma variável para poder usar depois
const powerBtn = document.getElementById("btnPower"); // Pega o elemento do botão de ligar/desligar do HTML e armazena em uma variável para poder usar depois
const statusPower = document.getElementById("statusPower"); // Pega o elemento do status da calculadora do HTML e armazena em uma variável para poder usar depois
const visorEl = document.getElementById("visor"); // Pega o elemento do visor da calculadora do HTML e armazena em uma variável para poder usar depois

// Função para ligar/desligar a calculadora
function ligarDesligar() {
  ligada = !ligada;
  [num1Input, num2Input, operadorInput, calcularBtn].forEach((el) => { //Definimos um array com os elementos que queremos habilitar/desabilitar
    el.disabled = !ligada;
  });
  // O .textContent pode ser usado para obter ou definir o conteúdo de texto de um elemento.
  powerBtn.textContent = ligada ? "Desligar" : "Ligar"; // Troca o texto do botão de ligar/desligar
  statusPower.textContent = ligada ? "Estado: Ligada" : "Estado: Desligada"; // Atualiza o status da calculadora
  visorEl.innerText = ligada ? "0" : ""; // Limpa o visor quando desligada, ou mostra 0 quando ligada
  if (!ligada) { // Se a calculadora for desligada, reseta o histórico e atualiza a lista
    historico = [];
    atualizarHistorico();
  }
  resultado = 0; // Reseta o resultado quando a calculadora é ligada ou desligada
}

// função para executar a operação matemática escolhida
function executarOperacao(num1, num2, operador) { 
  let resultadoLocal;

  switch (operador) { // Verifica qual operador foi selecionado e executa a operação escolhida
    case "+":
      resultadoLocal = num1 + num2;
      break;
    case "-":
      resultadoLocal = num1 - num2;
      break;
    case "*":
      resultadoLocal = num1 * num2;
      break;
    case "/":
      if (num2 === 0) { // Verifica se o segundo número é zero antes de tentar dividir, para evitar erro de divisão por zero
        alert("Divisão por zero não é permitida.");
        return 0;
      }
      resultadoLocal = num1 / num2;
      break;
    default:
      alert("Operador inválido");
      return 0;
  }

  return resultadoLocal; // Retorna o resultado da operação para a função calcular()
}

//função
function calcular() { //
  if (!ligada) {
    alert("Ligue a calculadora primeiro.");
    return;
  }

  const num1 = parseFloat(num1Input.value); // Converte o valor do input para número de ponto flutuante
  const num2 = parseFloat(num2Input.value);
  const operador = operadorInput.value; //  Pega o valor do operador selecionado
  
  if (Number.isNaN(num1) || Number.isNaN(num2)) {  // Verifica se os valores convertidos são um número ou não (NaN)
    alert("Digite números válidos para os dois campos.");
    return;
  }

  resultado = executarOperacao(num1, num2, operador); // Chama a função que executa a operação e armazena o resultado
  visorEl.innerText = resultado; // Atualiza o visor com o resultado
  historico.push(`${num1} ${operador} ${num2} = ${resultado}`); // Adiciona a string do cálculo ao array de histórico no final do array.
  atualizarHistorico();
}


function atualizarHistorico() {
  const ul = document.getElementById("historico-lista");  // Pega a lista não ordenada <ul> do HTML
  ul.innerHTML = "";  // Limpa todo o conteúdo da lista (remove itens antigos)

  for (let i = 0; i < historico.length; i++) { // .length retorna um número (o tamanho do array), permitindo a comparação 'i < numero'
    const li = document.createElement("li");  // Cria um novo item de lista <li>
    li.textContent = historico[i];  // Define o texto do <li> como a string do cálculo.
    ul.appendChild(li);  // Adiciona o <li> na <ul>
  }
}