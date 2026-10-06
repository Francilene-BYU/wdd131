const anoAtual = new Date().getFullYear();

document.querySelector("#anoAtual").textContent = anoAtual;

const ultimaModificacao = document.lastModified;

document.querySelector("#ultimaModificacao").textContent = ultimaModificacao;

let contador = Number(localStorage.getItem("contadorAvaliacoes")) || 0;

contador++;

localStorage.setItem("contadorAvaliacoes", contador);

document.querySelector("#contadorAvaliacoes").textContent = contador;