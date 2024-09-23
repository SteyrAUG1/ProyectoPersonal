// Obtén el enlace "Pijamas" por su clase
const pijamasLink = document.querySelector('.pijamas-link');
    
// Obtén el submenú correspondiente por su clase o identificador
const submenuPijamas = document.querySelector('.submenu-pijamas');

// Agrega un evento de clic al enlace "Pijamas"
pijamasLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace recargue la página
    submenuPijamas.classList.toggle('show'); // Muestra u oculta el submenú
});