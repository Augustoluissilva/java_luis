function calcular() {
    let numero = parseInt(document.getElementById("numero").value);

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    let resultado = "O fatorial de " + numero + " é: " + fatorial;

    document.getElementById("resultado").innerHTML = resultado;
}