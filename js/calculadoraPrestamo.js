document.addEventListener('DOMContentLoaded', () => {
    const mostrarCalculadora = document.getElementById('mostrarCalculadora');
    const calculadoraContainer = document.getElementById('calculadoraContainer');
    const montoInput = document.getElementById('montoInput');
    const tasaInteres = 0.05; // Tasa de interés 
  
    mostrarCalculadora.addEventListener('click', (event) => {
      event.preventDefault(); // Evita la acción predeterminada de redirección
  
      // Muestra u oculta la calculadora al hacer clic en la imagen
      if (calculadoraContainer.style.display === 'none' || calculadoraContainer.style.display === '') {
        calculadoraContainer.style.display = 'block';
      } else {
        calculadoraContainer.style.display = 'none';
      }
    });
  
    document.getElementById('calcularBtn').addEventListener('click', () => {
      const monto = parseFloat(montoInput.value);
      if (!isNaN(monto)) {
        const interes = monto * tasaInteres;
        const totalAPagar = monto + interes;
        document.getElementById('interesMostrado').textContent = `$${interes.toFixed(2)}`;
        document.getElementById('totalMostrado').textContent = `$${totalAPagar.toFixed(2)}`;
      }
    });
  });
  