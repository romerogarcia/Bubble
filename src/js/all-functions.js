'use strict';
//Menu desplegable
document.addEventListener('DOMContentLoaded', function () {
  const desktopMenu = document.querySelector('.menu-desktop');
  const mobileMenu = document.querySelector('.menu-mobile');
  const menuItems = desktopMenu.querySelectorAll('.menu-item');
  let activeSubmenu = null;

  // Clic en el icono del menú hamburguesa
  mobileMenu.addEventListener('click', function () {
    desktopMenu.classList.toggle('show');
  });

  // Función submenús
  function closeAllSubmenus() {
    menuItems.forEach(function (menuItem) {
      const submenu = menuItem.querySelector('.submenu');
      if (submenu) {
        submenu.classList.remove('active');
      }
    });
  }

  // Clic en las opciones del menú de escritorio
  menuItems.forEach(function (menuItem) {
    const submenu = menuItem.querySelector('.submenu');

    if (submenu) {
      menuItem.addEventListener('click', function (e) {
        e.stopPropagation();
        if (activeSubmenu !== submenu) {
          closeAllSubmenus();
        }

        submenu.classList.toggle('active');
        activeSubmenu = submenu;
      });
    }
  });

  // Clic en el icono del menú hamburguesa en dispositivos móviles para desplegar las opciones
  mobileMenu.addEventListener('click', function () {
    desktopMenu.classList.toggle('show-menu');
  });

  // Clic en cualquier lugar fuera del menú para cerrar todos los submenús
  document.addEventListener('click', function (e) {
    if (!desktopMenu.contains(e.target)) {
      closeAllSubmenus();
      activeSubmenu = null;
    }
  });
});

//Ocultar/mostrar el texto de la tarjeta al hacer clic en el botón
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const hiddenText = document.getElementById('hiddenText');
  let isTextVisible = false;

  toggleButton.addEventListener('click', function () {
    if (isTextVisible) {
      hiddenText.style.display = 'none';
      toggleButton.textContent = 'Leer Más';
    } else {
      hiddenText.style.display = 'block';
      toggleButton.textContent = 'Leer Menos';
    }
    isTextVisible = !isTextVisible;
  });
});

//Seleccion idioma
const spanishButton = document.getElementById('spanish-button');
const englishButton = document.getElementById('english-button');

spanishButton.addEventListener('click', () => {
  spanishButton.classList.add('selected');
  englishButton.classList.remove('selected');
});

englishButton.addEventListener('click', () => {
  englishButton.classList.add('selected');
  spanishButton.classList.remove('selected');
});

//Cagar página
document.addEventListener('DOMContentLoaded', function () {
  // Ocultar el contenido principal (main) y el pie de página (footer) al principio
  const main = document.querySelector('.main');
  const footer = document.querySelector('.footer');
  main.style.display = 'none';
  footer.style.display = 'none';

  // Mostrar el contenido principal (main) y el pie de página (footer) después de dos segundos
  setTimeout(function () {
    main.style.display = 'block';
    footer.style.display = 'grid';
  }, 2000); // 2000 milisegundos (2 segundos)
});
