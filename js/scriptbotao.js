const missao = document.querySelector("#missao");
const visao = document.querySelector("#visao");
const valores = document.querySelector("#valores");
const textoSobre = document.querySelector(".texto_sobre p");

function textomissao() {
    textoSobre.innerText = "A missão da nossa empresa é transformar as ideias criativas dos nossos clientes em estampas únicas, promovendo qualidade e originalidade em cada produto.";
}

function textovisao() {
    textoSobre.innerText = "A visão da nossa empresa é ser reconhecida como líder no mercado de estampas criativas, sempre inovando e atendendo às expectativas dos nossos clientes.";
}


function textovalores() {
    textoSobre.innerText = "Nossos valores incluem comprometimento com a qualidade, respeito às ideias e cultura de cada cliente, e um forte compromisso com a sustentabilidade e inovação.";
}

missao.addEventListener("click", textomissao);
visao.addEventListener("click", textovisao);
valores.addEventListener("click", textovalores);