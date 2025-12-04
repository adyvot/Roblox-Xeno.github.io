// Вручную измените эти ссылки
const downloadUrl = 'https://www.mediafire.com/file/smcqq5ibkgv6g6l/Xeno-v1.3.0a.zip/file'; // Поместите вашу ссылку на скачивание здесь, например 'https://example.com/download.zip'
const videoUrl = 'https://www.youtube.com/watch?v=VaDSAZkGYkY'; // Поместите ваш YouTube URL здесь, например 'https://www.youtube.com/watch?v=VIDEO_ID'

async function downloadExecutor(event) {
    if (event) event.preventDefault();
    
    try {
        if (downloadUrl) {
            window.open(downloadUrl, '_blank');
        } else {
            alert('Ссылка для скачивания не настроена');
        }
    } catch (error) {
        console.error('Download error:', error);
        alert('Ошибка при открытии ссылки для скачивания');
    }
}

function displayVideo(url) {
    const container = document.getElementById('videoContainer');
    let embedUrl = url;
    
    if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1].split('&')[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
    
    container.innerHTML = `<iframe width="100%" height="200" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
}

function resetVideoPlaceholder() {
    const container = document.getElementById('videoContainer');
    container.innerHTML = `
        <div class="video-content">
            <div class="play-button">▶</div>
            <p>Click to watch video</p>
        </div>
    `;
}

window.onload = function() {
    if (videoUrl) {
        displayVideo(videoUrl);
    } else {
        resetVideoPlaceholder();
    }
};
