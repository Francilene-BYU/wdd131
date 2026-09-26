const templos = [
    {
        nomeDoTemplo: "Templo Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Templo Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Templo Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Templo Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Templo Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Templo Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Templo Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Templo de Belém Brasil",
        localizacao: "Belém, Pará/Brasil",
        consagracao: "2022, 20 de novembro",
        area: 28675,
        urlDaImagem:
            "https://www.churchofjesuschrist.org/imgs/588d3a27e2b911ec94adeeeeac1e0a0694f432a0/full/800%2C/0/default"
    },
     {
        nomeDoTemplo: "Templo de Fortaleza Brasil",
        localizacao: "Fortaleza, Ceará/Brasil",
        consagracao: "2019, 2 de junho",
        area: 36000,
        urlDaImagem:
            "https://www.churchofjesuschrist.org/imgs/e2a28dbb2b14f5f71d79b359cf9f7b88dc480144/full/500%2C/0/default"
    },
    {
        nomeDoTemplo: "Templo de Recife Brasil",
        localizacao: "Recife, Pernambuco/Brasil",
        consagracao: "2000, 15 de dezembro",
        area: 37200,
        urlDaImagem:
            "https://www.churchofjesuschrist.org/imgs/74d57cefebf31773df61b0b882067ee236de5279/full/500%2C/0/default"
    }
];

const galeria = document.querySelector(".galeria");
const linkInicio = document.querySelector("#inicio");
const linkAntigo = document.querySelector("#antigo");
const linkNovo = document.querySelector("#novo");
const linkGrande = document.querySelector("#grande");
const linkPequeno = document.querySelector("#pequeno");

linkInicio.addEventListener("click", function (evento) {
    evento.preventDefault();
    mostrarTemplos(templos);
});

linkAntigo.addEventListener("click", function (evento) {
    evento.preventDefault();
    mostrarTemplos(templosAntigos);
});

linkNovo.addEventListener("click", function (evento) {
    evento.preventDefault();
    mostrarTemplos(templosNovos);
});

linkGrande.addEventListener("click", function (evento) {
    evento.preventDefault();
    mostrarTemplos(templosGrandes);
});

linkPequeno.addEventListener("click", function (evento) {
    evento.preventDefault();
    mostrarTemplos(templosPequenos);
});

function mostrarTemplos(lista) {
    galeria.innerHTML = "";

    lista.forEach(function (templo) {
        const figure = document.createElement("figure");
        const imagem = document.createElement("img");
        
        imagem.setAttribute("src", templo.urlDaImagem);
        imagem.setAttribute("alt", templo.nomeDoTemplo);
        imagem.setAttribute("loading", "lazy");

        figure.appendChild(imagem);

        const titulo = document.createElement("h2");
        titulo.textContent = templo.nomeDoTemplo;

        figure.appendChild(titulo);

        const localizacao = document.createElement("p");
        localizacao.textContent = templo.localizacao;

        figure.appendChild(localizacao);

        const consagracao = document.createElement("p");
        consagracao.textContent = `Consagração: ${templo.consagracao}`;

        figure.appendChild(consagracao);

        const area = document.createElement("p");
        area.textContent = `Área: ${templo.area.toLocaleString("pt-BR")} pés²`;

        figure.appendChild(area);

        galeria.appendChild(figure);
        

    });

}

mostrarTemplos(templos);

function obterAno(templo) {
    return Number(templo.consagracao.split(",")[0]);
}

const templosAntigos = templos.filter(function (templo) {
    return obterAno(templo) < 1900;
});

const templosNovos = templos.filter(function (templo) {
    return obterAno(templo) > 2000;
});

const templosGrandes = templos.filter(function (templo) {
    return templo.area > 90000;
});

const templosPequenos = templos.filter(function (templo) {
    return templo.area < 10000;
});

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

