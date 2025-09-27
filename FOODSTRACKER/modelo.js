function loginUser(event) {
event.preventDefault();
    
const usuario = document.getElementById("usuario").value;
const password = document.getElementById("password").value;
const mantenerSesion = document.getElementById("mantenerSesion").checked;

  if (usuario === "dukino" && password === "1234") {
        alert("Inicio de sesión correcto");
        window.location.href = "index2.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

const form = document.getElementById("foodForm");
const lista = document.getElementById("listaComidas");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombreComida").value;
  const hora = document.getElementById("horaComida").value;
  const calorias = document.getElementById("calorias").value;

  if (nombre && hora && calorias) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span><strong>${nombre}</strong> - ${hora} - ${calorias} cal</span>
      <button class="btn btn-sm btn-danger">X</button>
    `;

    
    li.querySelector("button").addEventListener("click", () => li.remove());

    lista.appendChild(li);

    form.reset();
  }
});

