const title = document.querySelector(".title");
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");
const next = document.querySelector(".next");
const audio = document.querySelector(".audio");

const songList = [
  {
    path: "songs/chill.mp3",
    songName: "Chill",
  },
  {
    path: "songs/heavenly.mp3",
    songName: "Heavenly",
  },
  {
    path: "songs/peace.mp3",
    songName: "Peace",
  },
];

let songPlaying = false;

//play song
function playSong() {
  songPlaying = true;
  loadSong(songList[i]);

  audio.play();
  playPause.classList.add("active");
  playPause.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`;
}
//pause song
function pauseSong() {
  songPlaying = false;
  audio.pause();
  playPause.classList.remove("active");
  playPause.innerHTML = `<ion-icon name="play-outline"></ion-icon>`;
}

//play or pause song on click

playPause.addEventListener("click", kt);

function kt() {
  songPlaying ? pauseSong() : playSong();
}
//load song
function loadSong(songList) {
  title.textContent = songList.songName;
  audio.src = songList.path;
}

let i = 0;

function prevSong() {
  i--;
  if (i < 0) {
    i = songList.length - 1;
  }
  loadSong(songList[i]);
  playSong();
}

prev.addEventListener("click", prevSong);

function nextSong() {
  i++;
  if (i < 0) {
    i = songList.length + 1;
  }
  loadSong(songList[i]);
  playSong();
}

next.addEventListener("click", nextSong);
