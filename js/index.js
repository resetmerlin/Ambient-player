const title = document.querySelector(".title");
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");
const next = document.querySelector(".next");
const audio = document.querySelector(".audio");
const video = document.querySelector(".wallpaper");
const rain = document.querySelector(".rain");
const thunder = document.querySelector(".thunder");
const wind = document.querySelector(".wind");

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
let id;
let songPlaying = false;
let rainPlaying = false;
let thunderPlaying = false;
let windPlaying = false;

//play rain

function playRainPause() {
  rainPlaying = false;

  var sound = new Howl({
    src: ["/songs/rain.mp3"],
    volume: 0.1,
    loop: true,
  });

  Howler.stop();
  rain.classList.remove("active");
}

function playRainPlay() {
  rainPlaying = true;

  var sound = new Howl({
    src: ["/songs/rain.mp3"],
    volume: 0.1,
    loop: true,
  });

  sound.play();
  rain.classList.add("active");
}

//play storm

function playStormPause() {
  thunderPlaying = false;

  var sound2 = new Howl({
    src: ["/songs/thunder1.mp3", "/songs/thunder2.mp3"],
    volume: 0.5,
    loop: true,
  });

  Howler.stop();
  thunder.classList.remove("active");
}

function playStormPlay() {
  thunderPlaying = true;

  var sound2 = new Howl({
    src: ["/songs/thunder1.mp3", "/songs/thunder2.mp3"],
    volume: 0.5,
    loop: true,
  });

  sound2.play();
  thunder.classList.add("active");
}

//play wind
function playWindPause() {
  windPlaying = false;

  var sound1 = new Howl({
    src: ["/songs/wind.mp3"],
    volume: 0.1,
    loop: true,
  });

  Howler.stop();
  wind.classList.remove("active");
}

function playWindPlay() {
  windPlaying = true;

  var sound1 = new Howl({
    src: ["/songs/wind.mp3"],
    volume: 0.1,
    loop: true,
  });

  sound1.play();
  wind.classList.add("active");
}
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

function playRain() {
  rainPlaying ? playRainPause() : playRainPlay();
}
function playThunder() {
  thunderPlaying ? playStormPause() : playStormPlay();
}

function playWind() {
  windPlaying ? playWindPause() : playWindPlay();
}
//play or pause song on click

playPause.addEventListener("click", kt);
rain.addEventListener("click", playRain);
thunder.addEventListener("click", playThunder);
wind.addEventListener("click", playWind);

function kt() {
  songPlaying ? pauseSong() : playSong();
}
//load song
function loadSong(songList) {
  title.textContent = songList.songName;
  audio.src = songList.path;
  changeVid(i);
}

function changeVid(i) {
  event.preventDefault();

  let type = video.src;
  if (i == 0) {
    if (type !== `img/mylivewallpapers.com-Lo-Fi-Girl.mp4`) {
      video.src = `img/mylivewallpapers.com-Lo-Fi-Girl.mp4`;
    }
  }
  if (i == 1) {
    if (type !== `img/livingroom.mp4`) {
      video.src = `img/livingroom.mp4`;
    }
  } else if (i == 2) {
    if (type !== `img/lofi.mp4`) {
      video.src = `img/lofi.mp4`;
    }
  }
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
  if (i !== 2) {
    i++;
    if (i < 0) {
      i = songList.length + 1;
    }

    loadSong(songList[i]);
    playSong();
  } else if (i == 2) {
    i === 0;
    loadSong(songList[i]);
    playSong();
  }
}

next.addEventListener("click", nextSong);
