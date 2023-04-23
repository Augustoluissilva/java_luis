function mostrarVideo() {
    const escolha = document.querySelector('input[name="escolha"]:checked').value;
  
    let videoId;
  
    if (escolha === 'nacional') {
      videoId = "7DKMJuzrspA"; 
    } else {
      videoId = "klSC9QzmGzo"; 
    }
  
    const video = document.createElement('iframe');
    video.width = 560;
    video.height = 315;
    video.src = `https://www.youtube.com/embed/${videoId}`;
    video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    video.allowFullscreen = true;
  
    const container = document.getElementById('video');
    container.innerHTML = '';
    container.appendChild(video);
  }