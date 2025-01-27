document.getElementById('addVideoButton').addEventListener('click', () => {
    const videoInput = document.getElementById('video');
    const filmesContainer = document.getElementById('filmes_container');
  
    if (videoInput.files.length > 0) {
      const file = videoInput.files[0];
  
      const videoUrl = URL.createObjectURL(file);
  
      // Cria o elemento de vídeo
      const videoElement = document.createElement('video');
      videoElement.src = videoUrl;
      videoElement.controls = true;
      videoElement.width = 100;  // Defina o tamanho inicial do vídeo
  
      // Adiciona o evento para tela cheia após o play
      videoElement.addEventListener('play', () => {
        // Quando o vídeo começar a tocar, ele entra em tela cheia
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) { // Firefox
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) { // IE/Edge
          videoElement.msRequestFullscreen();
        }
      });
  
      filmesContainer.appendChild(videoElement);
    } else {
      alert('Por favor, selecione um vídeo antes de adicionar.');
    }
  });
  