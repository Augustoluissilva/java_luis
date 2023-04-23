function calcularBhaskara() {
    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);
    const valorC = parseFloat(document.getElementById('valorC').value);
  
    const delta = Math.pow(valorB, 2) - 4 * valorA * valorC;
  
    if (delta < 0) {
      document.getElementById('resultado').textContent = 'Não há raízes reais.';
    } else if (delta === 0) {
      const raiz = -valorB / (2 * valorA);
      document.getElementById('resultado').textContent = `A única raiz é ${raiz.toFixed(2)}.`;
    } else {
      const raiz1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
      const raiz2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
      document.getElementById('resultado').textContent = `As raízes são ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}.`;
    }
  }

  
  
  
  
  
  