function isPrime(n) {
    if (n < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
    if (n < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
      function verificarPrimo() {
        const numero = parseInt(document.getElementById('numero').value);
        const resultado = document.getElementById('resultado');
        if (isPrime(numero)) {
          resultado.textContent = `${numero} é primo!`;
        } else {
          resultado.textContent = `${numero} não é primo.`;
        }
      }