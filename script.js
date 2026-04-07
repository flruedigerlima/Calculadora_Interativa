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
let visor = "";
let resultado = 0;
let ligada = false;
let historico = [];
num1 = parseFloat(1);
num2 = parseFloat(2);
num3 = parseFloat(3);
num4 = parseFloat(4);
num5 = parseFloat(5);
num6 = parseFloat(6);
num7 = parseFloat(7);
num8 = parseFloat(8);
num9 = parseFloat(9);
num0 = parseFloat(0);

// Função para ligar/desligar a calculadora
function ligarDesligar() {
  ligada = !ligada;
  if (!ligada) {
    visor = "";
    resultado = 0;
    document.getElementById("visor").innerText = visor;
  }
}

function calcular() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operador = document.getElementById("operador").value;

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
      alert("Operador inválido");
      return;

  }

  document.getElementById("visor").innerText = resultado;
  historico.push(`${num1} ${operador} ${num2} = ${resultado}`);
}


