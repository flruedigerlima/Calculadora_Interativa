/*
// Array global para armazenar as tarefas
    let tarefas = [];

    // Função criarTarefa mais simples e introdutória
    function criarTarefa(descricao) {
      // Criamos um objeto vazio
      let tarefa = {};

      // Adicionamos propriedades
      tarefa.descricao = descricao;
      tarefa.status = "pendente";

      // Adicionamos um método
      tarefa.detalhes = function() {
        return `Tarefa: ${this.descricao} | Status: ${this.status}`;
      };

      // Retornamos o objeto pronto
      return tarefa;
    }

    // Função para adicionar tarefa
    function adicionarTarefa() {
      let input = document.getElementById("novaTarefa");
      let descricao = input.value.trim();

      if (descricao === "") {
        alert("Digite uma tarefa!");
        return;
      }

      // Criamos o objeto tarefa
      let tarefa = criarTarefa(descricao);

      // Adicionamos no array global
      tarefas.push(tarefa);

      // Limpamos o campo de texto
      input.value = "";

      // Atualizamos a lista no HTML
      atualizarLista();
    }

    // Função para remover tarefa
    function removerTarefa(index) {
      tarefas.splice(index, 1);
      atualizarLista();
    }

    // Função para marcar como concluída
    function concluirTarefa(index) {
      tarefas[index].status = "concluída";
      atualizarLista();
    }

    // Função para atualizar a lista no HTML
    function atualizarLista() {
      let ul = document.getElementById("lista");
      ul.innerHTML = "";

      // Percorremos todas as tarefas e mostramos na tela
      tarefas.forEach((tarefa, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
          <div>
            <strong>${tarefa.descricao}</strong>
            <div class="detalhes">${tarefa.detalhes()}</div>
          </div>
          <div>
            <button onclick="concluirTarefa(${index})">OK</button>
            <button onclick="removerTarefa(${index})">X</button>
          </div>
        `;
        ul.appendChild(li);
      });
    }
      */

// Variáveis globais para a calculadora
let ligada;
let resultado = 0;
let historico = [];
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operadorInput = document.getElementById("operador");
const calcularBtn = document.getElementById("btnCalcular");
const powerBtn = document.getElementById("btnPower");
const statusPower = document.getElementById("statusPower");
const visorEl = document.getElementById("visor");

// Função para ligar/desligar a calculadora
function ligarDesligar() {
  ligada = !ligada;
  [num1Input, num2Input, operadorInput, calcularBtn].forEach((el) => { //Definimos um array com os elementos que queremos habilitar/desabilitar
    el.disabled = !ligada;
  });
  powerBtn.textContent = ligada ? "Desligar" : "Ligar"; // Troca o texto do botão de ligar/desligar
  statusPower.textContent = ligada ? "Estado: Ligada" : "Estado: Desligada"; // Atualiza o status da calculadora
  visorEl.innerText = ligada ? "0" : ""; // Limpa o visor quando desligada, ou mostra 0 quando ligada
  if (!ligada) {
    historico = [];
    atualizarHistorico();
  }
  resultado = 0; // Reseta o resultado quando a calculadora é ligada ou desligada
}

function calcular() {
  if (!ligada) {
    alert("Ligue a calculadora primeiro.");
    return;
  }

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operador = operadorInput.value;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      return alert("Operador inválido");
  }

  visorEl.innerText = resultado;
  historico.push(`${num1} ${operador} ${num2} = ${resultado}`);
  atualizarHistorico();
}

function atualizarHistorico() {
  const ul = document.getElementById("historico-lista");  // Pega a lista não ordenada 'ul' do HTML
  ul.innerHTML = "";  // Limpa todo o conteúdo da lista (remove itens antigos)
  historico.forEach(calc => {  // Para cada string no array histórico...
    const li = document.createElement("li");  // ...cria um novo item de lista <li>
    li.textContent = calc;  // Define o texto do <li> como a string do cálculo.
    ul.appendChild(li);  // Adiciona o <li> à <ul>
  });
}