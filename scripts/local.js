
const fortaleza = {
    pais: "Brasil",
    estado: "Ceará",
    capital: "Fortaleza",
    populacao: "2.428.708 habitantes",
    area: "312,353 km²",
    temperatura: "27 °C",
    condicao: "Ensolarado",
    vento: "20 km/h"
};

function calcularSensacaoTermica(temperatura, vento) {
    return 13.12 + 0.6215 * temperatura - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temperatura * Math.pow(vento, 0.16);
}

let sensacaoTermica = "N/A";

const temperatura = 27;
const vento = 20;

if (temperatura <= 10 && vento > 4.8) {
    sensacaoTermica = calcularSensacaoTermica(temperatura, vento);
}

document.querySelector("#sensacaoTermica").textContent = sensacaoTermica;
document.querySelector("#pais").textContent = fortaleza.pais;
document.querySelector("#estado").textContent = fortaleza.estado;
document.querySelector("#capital").textContent = fortaleza.capital;
document.querySelector("#populacao").textContent = fortaleza.populacao;
document.querySelector("#area").textContent = fortaleza.area;

document.querySelector("#temperatura").textContent = fortaleza.temperatura;
document.querySelector("#condicao").textContent = fortaleza.condicao;
document.querySelector("#vento").textContent = fortaleza.vento;


const anoAtual = new Date().getFullYear();
document.querySelector("#anoAtual").textContent = anoAtual;

const ultimaModificacao = document.lastModified;
document.querySelector("#ultimaModificacao").textContent = ultimaModificacao;
