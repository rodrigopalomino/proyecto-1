// Código JavaScript para actualizar las opciones del select de doctores
const selectEspecialidad = document.getElementById('especialidad');
const selectDoctor = document.getElementById('doctor');
const doctoresPorEspecialidad = <%= JSON.stringify(doctoresPorEspecialidad) %>;

selectEspecialidad.addEventListener('change', () => {
    const especialidadSeleccionada = selectEspecialidad.value;
    const doctores = doctoresPorEspecialidad[especialidadSeleccionada] || [];

  // Limpiar las opciones anteriores
    selectDoctor.innerHTML = '';

  // Agregar las nuevas opciones
    doctores.forEach(nombreDoctor => {
    const option = document.createElement('option');
    option.value = nombreDoctor;
    option.textContent = nombreDoctor;
    selectDoctor.appendChild(option);
    });
});