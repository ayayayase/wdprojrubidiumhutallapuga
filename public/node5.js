const musicButton = document.getElementById('musicButton');
let audio = new Audio('music1.mp3'); // First song
let isPlaying = false;
let currentSong = 1; // Track the current song

musicButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    musicButton.textContent = 'Play Music';
    isPlaying = false;
  } else {
    if (currentSong === 1) {
      audio = new Audio('music1.mp3');
    } else if (currentSong === 2) {
      audio = new Audio('music2.mp3');
    }
    audio.play();
    musicButton.textContent = 'Change Music';
    isPlaying = true;
    currentSong = (currentSong % 2) + 1; // Toggle between songs
  }
});