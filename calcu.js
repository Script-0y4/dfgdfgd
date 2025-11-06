
const gTierra = 9.8;
const gMarte = 3.7;
const gJupiter = 24.8;
const gSaturno = 10.44;


const planetas = {
    'Marte': gMarte,
    'Jupiter': gJupiter,
    'Saturno': gSaturno
};


const inputPeso = document.getElementById('pesoTierra');
const resultadoTexto = document.getElementById('resultadoTexto');


function calcularPeso(gravedadPlaneta, nombrePlaneta) {
    
    const pesoTierraStr = inputPeso.value;
    
    
    const pesoTierra = parseFloat(pesoTierraStr);
    
   
    if (isNaN(pesoTierra) || pesoTierra <= 0) {
        
        resultadoTexto.textContent = "⚠️ Ups, Algo salió mal. Asegúrate de introducir un número válido y positivo.";
        return; // Detener la función
    }

   
    const resultado = (pesoTierra * gravedadPlaneta) / gTierra;

    
    resultadoTexto.textContent = `Tu peso en ${nombrePlaneta} es ${resultado.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
   
    const botonesPlaneta = document.querySelectorAll('.planet-btn');

   
    botonesPlaneta.forEach(boton => {
        boton.addEventListener('click', () => {
            
            const nombrePlaneta = boton.getAttribute('data-planet');
            const gravedad = planetas[nombrePlaneta];
            
        
            calcularPeso(gravedad, nombrePlaneta);
        });
    });
});