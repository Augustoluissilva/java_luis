function celsiusParaKelvin(celsius) {
    let kelvin = celsius + 273.15;
    return kelvin;
}

function mostrarKelvin() {
    let celsius = parseFloat(document.getElementById("temperatura").value);
    let kelvin = celsiusParaKelvin(celsius);
    document.getElementById("resultado").innerHTML = celsius + " graus Celsius é equivalente a " + kelvin + " graus Kelvin.";
}