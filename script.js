function upDate(previewPic) {
    // Log to check event trigger
    console.log("Mouse over:", previewPic.alt);
  
    // Change background image of div
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  
    // Update text with alt text
    imageDiv.innerHTML = previewPic.alt;
  }
  
  function undo() {
    // Reset background image and text
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
  }
  const images = document.querySelectorAll('figure');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        // При наведении мыши
        image.style.border = "2px solid blue"; // Пример
    });

    image.addEventListener('mouseleave', () => {
        // При уходе мыши
        image.style.border = "";
    });

    image.addEventListener('focus', () => {
        // При получении фокуса (клавишей Tab)
        image.style.border = "2px solid green";
    });

    image.addEventListener('blur', () => {
        // При потере фокуса
        image.style.border = "";
    });
});
window.onload = function() {
    const images = document.querySelectorAll('figure');
    images.forEach((image, index) => {
        image.setAttribute('tabindex', index + 1);
    });
    console.log('Tabindex добавлен к каждому изображению');
};