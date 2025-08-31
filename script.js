const shareButton = document.getElementById('shareButton');
const shareButtonBar = document.getElementById('shareButtonBar');
const shareBar = document.getElementById('shareBar');
const cardAuthor = document.querySelector('.card-author');

// Función para mostrar/ocultar la barra de compartir
function toggleShareBar() {
  shareBar.classList.toggle('active');
  shareButton.classList.toggle('active');
  
  // Si la barra está activa, añadir listener para cerrar al hacer clic fuera
  if (shareBar.classList.contains('active')) {
    setTimeout(() => {
      document.addEventListener('click', closeShareBar);
    }, 100);
  }
}

// Función para cerrar la barra de compartir
function closeShareBar(e) {
  // No cerrar si se hace clic en la barra de compartir o los botones
  if (!shareBar.contains(e.target) && !shareButton.contains(e.target) && !shareButtonBar.contains(e.target)) {
    shareBar.classList.remove('active');
    shareButton.classList.remove('active');
    document.removeEventListener('click', closeShareBar);
  }
}

// Event listeners para ambos botones de compartir
shareButton.addEventListener('click', function(e) {
  e.preventDefault();
  toggleShareBar();
});

shareButtonBar.addEventListener('click', function(e) {
  e.preventDefault();
  toggleShareBar();
});
