const pauseBtn = document.querySelector('.pause-btn');
const video = document.querySelector('video');
const _switch = document.querySelector('.switch');

pauseBtn.addEventListener('click', () => {
    _switch.classList.toggle('move-switch');

    if(_switch.classList.contains('move-switch')) {
        video.pause();
    } else {
        video.play();
    }
})