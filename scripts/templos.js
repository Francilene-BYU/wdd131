const anoAtual = new Date().getFullYear();
document.querySelector("#anoAtual").textContent = anoAtual;

const ultimaModificacao = document.lastModified;
document.querySelector("#ultimaModificacao").textContent = ultimaModificacao;

const botaoMenu = document.querySelector("#menu");
const nav = document.querySelector("nav");

botaoMenu.addEventListener("click", function () {
    nav.classList.toggle("aberto");

    if (nav.classList.contains("aberto")) {
        botaoMenu.textContent = "✕";
        botaoMenu.setAttribute("aria-label", "Fechar menu");

    } else {
        botaoMenu.textContent = "☰";
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }
});