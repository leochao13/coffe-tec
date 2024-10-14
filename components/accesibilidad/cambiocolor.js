const CambiocolorHTML = `

`;

const cambiocolor = document.getElementById('cambiocolor');
cambiocolor.innerHTML = CambiocolorHTML;

// Función para cambiar al modo oscuro o claro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  // Crear el botón para alternar el modo
  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Accesibilidad';
  darkModeButton.classList.add('dark-mode-toggle');
  darkModeButton.onclick = toggleDarkMode;

  // Agregar el botón al cuerpo del documento
  document.body.appendChild(darkModeButton);