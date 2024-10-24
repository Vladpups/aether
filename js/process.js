    // Плавное появление видео
    window.addEventListener('load', function() {
      const video = document.getElementById('myVideo');
      video.oncanplay = function() {
        video.style.opacity = 1; // Видео плавно появится при готовности
      };
    });

    // Плавное появление текста
    document.addEventListener("DOMContentLoaded", function () {
      const textBlocks = document.querySelectorAll('.text-block');

      textBlocks.forEach((block, index) => {
        setTimeout(() => {
          block.classList.add('fade-in');
        }, index * 2000); // Задержка между блоками
      });
    });