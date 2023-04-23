function calcular() {
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo").value);

    let montante = capital * Math.pow(1 + taxa, tempo);

    let resultado = "O montante do investimento é: R$ " + montante.toFixed(2);

    document.getElementById("resultado").innerHTML = resultado;
}