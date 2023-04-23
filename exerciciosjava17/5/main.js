function calcularCirculo(raio) {
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;
    return [area, perimetro];
  }

  function mostrarResultado() {
    let raio = document.getElementById("raio").value;
    let resultado = calcularCirculo(raio);
    document.getElementById("area").innerHTML = "Área: " + resultado[0].toFixed(2);
    document.getElementById("perimetro").innerHTML = "Perímetro: " + resultado[1].toFixed(2);
  }