function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

function mostrarArea() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let area = calcularAreaTriangulo(base, altura);
    document.getElementById("resultado").innerHTML = "A área do triângulo é " + area + ".";
}
