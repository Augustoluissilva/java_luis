function calcular() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;

    let resultado = "Soma: " + soma + "<br>";
    resultado += "Subtração: " + subtracao + "<br>";
    resultado += "Multiplicação: " + multiplicacao + "<br>";
    resultado += "Divisão: " + divisao;

    document.getElementById("resultado").innerHTML = resultado;
}