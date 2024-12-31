document.addEventListener("DOMContentLoaded", function() {
  const pages = document.querySelectorAll('.menu-page');
  let currentPage = 0;

  // Función para cambiar de página
  function changePage(direction) {
    pages[currentPage].classList.remove('active');
    
    // Actualiza la página actual
    currentPage = (currentPage + direction + pages.length) % pages.length;
    
    // Muestra la nueva página
    pages[currentPage].classList.add('active');
  }

  // Botones de navegación
  document.querySelector('.nav-button.left').addEventListener('click', function() {
    changePage(-1);
  });

  document.querySelector('.nav-button.right').addEventListener('click', function() {
    changePage(1);
  });

  // Agregar eventos de deslizamiento para dispositivos táctiles
  let startX = 0;

  document.querySelector('.menu-container').addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  });

  document.querySelector('.menu-container').addEventListener('touchmove', function(e) {
    const moveX = e.touches[0].clientX;

    // Deslizar hacia la izquierda
    if (startX - moveX > 50) {
      changePage(1);
    }
    // Deslizar hacia la derecha
    else if (moveX - startX > 50) {
      changePage(-1);
    }
  });
});
