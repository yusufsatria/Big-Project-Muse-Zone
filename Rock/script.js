let progress = document.getElementById("progress"); /*mengatur laju musik*/
let music = document.getElementById("music");
let logokontrol =
  document.getElementById("logokontrol"); /*mengatur play dan pause*/

music.onloadedmetadata = function () {
  progress.max = music.duration;
  progress.value = music.currentTime;
};
function PlayPause() {
  if (logokontrol.classList.contains("fa-pause")) {
    music.pause();
    logokontrol.classList.remove(
      "fa-pause"
    ); /*mengubah play ke pause jika ditekan*/
    logokontrol.classList.add("fa-play");
  } else {
    music.play();
    logokontrol.classList.add(
      "fa-pause"
    ); /*mengubah pause ke play jika ditekan*/
    logokontrol.classList.remove("fa-play");
  }
}

if (music.play()) {
  setInterval(() => {
    progress.value = music.currentTime;
  }, 500); /*memberikan update ke progress bar sampai dimana laju musik*/
}

progress.onchange = function () {
  music.play();
  music.currentTime = progress.value;
  logokontrol.classList.add("fa-pause");
  logokontrol.classList.remove("fa-play");
};

let volumeControl = document.getElementById("volume"); // Volume control element

// mengatur volume awal saat metadatra dimuat
music.onloadedmetadata = function () {
  progress.max = music.duration;
  progress.value = music.currentTime;
  music.volume = volumeControl.value / 100; // mengatur volume berdasarkan slider
};

// penggantian
volumeControl.oninput = function () {
  music.volume = this.value / 100; // mengatur volume suatu audio 
};

const audio = document.getElementById('music'); //untuk menjalankan audio timestamp
  const progressBar = document.getElementById('progress'); //mencantumkan progress sebagai landasan berjalannya timestamp
  const currentTimeDisplay = document.getElementById('currentTime');  //fungsi time display menampilkan waktu yang yang sedang berjalan
  


  audio.addEventListener('timeupdate', updateProgressBar);

  function updateProgressBar() {
    const percentage = (audio.currentTime / audio.duration) ;
    progressBar.style = percentage + '%';
    updateTimeDisplay();
  }

  function updateTimeDisplay() {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    currentTimeDisplay.innerText = formattedTime;
  }

  function toggleMute() {
    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }
  
    updateIcon();
  }
  
  function updateIcon() {
    if (audio.muted) {
        icon.className = "fa-solid fa-volume-xmark";
    } else {
        icon.className = "fa-solid fa-volume-high";
    }
  }

  

// saat lagu berakhir progress pindah ke nol atau tempat semula
function onSongEnded() {
  // Reset the playback time to 0 to replay the song
  audio.currentTime = 0;
}
// Add an event listener for the "ended" event
audio.addEventListener("ended", onSongEnded);

