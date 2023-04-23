function verificarParOuImpar() {
    let numero = parseInt(document.getElementById("numero").value);
    if (numero % 2 == 0) {
        document.getElementById("resultado").innerHTML = numero + " é um número par.";
    } else {
        document.getElementById("resultado").innerHTML = numero + " é um número ímpar.";
    }
}