document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('.slider');
    let currentImageIndex = 0;
    let intervalId;
    let missionVisited = false;
    let productsVisited = false;
  
    function showCurrentImage() {
      galleryImages.forEach((image, index) => {
        if (index === currentImageIndex) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
  
    showCurrentImage();
  
    function changeImage() {
      currentImageIndex++;
      if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
      }
      showCurrentImage();
    }
  
    intervalId = setInterval(changeImage, 4000);
  
    const missionLink = document.getElementById('missionLink');
    const inicioLink = document.getElementById('inicioLink');
    const galleryContainer = document.querySelector('.gallery-container');
    const missionContainer = document.querySelector('.mission-container');
    const masProductosContent = document.getElementById('mas_productos');
  
    function showMissionContent() {
      galleryContainer.style.display = 'none';
      clearInterval(intervalId);
      missionContainer.style.display = 'block';
      missionVisited = true;
      masProductosContent.style.display = 'none'; // Oculta la sección de "Más Productos"
      productsVisited = false; // Restablece la variable productsVisited
    }
  
    missionLink.addEventListener('click', function(event) {
      event.preventDefault();
      showMissionContent();
    });
  
    inicioLink.addEventListener('click', function(event) {
      event.preventDefault();
      galleryContainer.style.display = 'block';
      missionContainer.style.display = 'none';
      if (missionVisited || productsVisited) {
        masProductosContent.style.display = 'none'; // Oculta la sección de "Más Productos"
        intervalId = setInterval(changeImage, 4000);
      }
    });
  
    const productsLink = document.querySelector('a[href="#mas_productos"]');
    productsLink.addEventListener('click', function(event) {
      event.preventDefault();
  
      const contentToHide = document.querySelectorAll('main > *:not(#mas_productos)');
      contentToHide.forEach(element => {
        element.style.display = 'none';
      });
  
      const headerFooter = document.querySelectorAll('header, footer');
      headerFooter.forEach(element => {
        element.style.display = 'block';
      });
  
      masProductosContent.style.display = 'block';
      productsVisited = true;
      missionContainer.style.display = 'none'; // Oculta la sección de "Nuestra Misión"
      missionVisited = false; // Restablece la variable missionVisited
    });
  
    // Ocultar "Más Productos" al inicio
    masProductosContent.style.display = 'none';
  });
  
  