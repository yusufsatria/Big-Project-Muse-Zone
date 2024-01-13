
    const myaudio = document.getElementById("song");
    const icon = document.getElementById("icon");

    icon.onclick = function () {
        if (myaudio.paused) {
            myaudio.play();
            icon.src = "pausebutton.png";
        } else {
            myaudio.pause();
            icon.src = "playbutton.png";
        }
    }

    let progress = document.getElementById("progress")
        let song = document.getElementById("song")
        let ctrlIcon = document.getElementById("icon")

        song.onloadedmetadata = function () {
            progress.max = song.duration;
        }

        song.ontimeupdate = function () {
            progress.value = song.currentTime;
        }


        // function playPause() {
        //     if (ctrlIcon.classList.contains("pausebutton.png")) {
        //         song.pause()
        //         ctrlIcon.classList.remove("fa-circle-pause")
        //         ctrlIcon.classList.add("fa-circle-play")
        //     } else {
        //         song.play()
        //         ctrlIcon.classList.add("fa-circle-pause")
        //         ctrlIcon.classList.remove("fa-circle-play")
        //     }
        // }

        setInterval(() => {
            if (!song.paused) {
                progress.value = song.currentTime;
            }
        }, 500)

        progress.onchange = function () {
            song.play()
            song.currentTime = progress.value
            ctrlIcon.classList.add("fa-circle-pause")
            ctrlIcon.classList.remove("fa-circle-play")
        }

        

