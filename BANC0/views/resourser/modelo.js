document.addEventListener('DOMContentLoaded', () => {
const pagina = window.location.pathname.split('/').pop().toLowerCase();

  
if (pagina === 'index1.html' || pagina === 'index.html' || pagina === '') {
  setTimeout(() => {
    
  window.location.href = './index2.html';
  }, 3000);
}

  
window.redireccionar = function() {
  window.location.href = './index3.html';
};

  
if (pagina === 'index3.html') {
  let tiempoRestante = 10;
  const codigoEl = document.getElementById('codigo');
  const contadorEl = document.getElementById('contador');

  function generarCodigo() {
    if (!codigoEl) return;
    let codigo = '';
    for (let i = 0; i < 4; i++) codigo += Math.floor(Math.random() * 10);
    codigoEl.textContent = codigo;
  }

  function actualizarContador() {
  if (contadorEl) contadorEl.textContent = tiempoRestante;
  tiempoRestante--;
    if (tiempoRestante < 0) {
      tiempoRestante = 10;
      generarCodigo();
    }
  }

  generarCodigo();
  setInterval(actualizarContador, 1000);
  }
});

window.redireccionar2 = function() {
    window.location.href = './index4.html';
  };

  window.redireccionar2 = function() {
    window.location.href = './index5.html';
  };

function guardarNombre() {
    const nombre = document.getElementById('nombreUsuario').value;
    localStorage.setItem('nombreUsuario', nombre); 
    window.location.href = "index5.html"; 
}

document.addEventListener("DOMContentLoaded", function() {
    const nombre = localStorage.getItem('nombreUsuario');
    const saludoEl = document.getElementById('saludo');
    if (nombre && nombre.trim() !== "") {
        saludoEl.textContent = "Hola " + nombre;
    } else {
        saludoEl.textContent = "Hola invitado";
    }
});