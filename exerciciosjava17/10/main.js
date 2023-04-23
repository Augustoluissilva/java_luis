function perguntarPersonagem() {
    const personagem = document.querySelector("#personagem").value;
    if (!personagem) {
        alert("Por favor, escolha um personagem.");
        return;
    }
    return personagem;
}
function perguntarQuantidade() {
    const quantidade = document.querySelector("#quantidade").value;
    if (quantidade < 1) {
        alert("Por favor, digite um número maior que 0.");
        return;
    }
    return quantidade;
}
function exibirPersonagem(personagem, quantidade) {
    const exibicao = document.querySelector("#exibicao");
    exibicao.innerHTML = "";
    for (let i = 0; i < quantidade; i++) {
        const img = document.createElement("img");
        img.src = `${personagem}.jpg`;
        img.alt = personagem;
        exibicao.appendChild(img);
    }
}
document.querySelector("#btn-personagem").addEventListener("click", () => {
    const personagem = perguntarPersonagem();
    if (personagem) {
        document.querySelector("#quantidade").value = 1;
        exibirPersonagem(personagem, 1);
    }
});
document.querySelector("#btn-quantidade").addEventListener("click", () => {
    const personagem = document.querySelector("#personagem").value;
    if (!personagem) {
        alert("Por favor, escolha um personagem antes de escolher a quantidade.");
        return;
    }
    const quantidade = perguntarQuantidade();
    if (quantidade) {
        exibirPersonagem(personagem, quantidade);
    }
});