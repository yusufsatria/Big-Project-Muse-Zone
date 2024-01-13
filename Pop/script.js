let progress = document.getElementById("progress"); /*mengatur laju musik*/
let music = document.getElementById("music"); 
let logokontrol = document.getElementById("logokontrol"); /*mengatur play dan pause*/

music.onloadedmetadata = function(){
    progress.max = music.duration;
    progress.value = music.currentTime;
}
function PlayPause(){
    if(logokontrol.classList.contains("fa-pause")){
        music.pause();
        logokontrol.classList.remove("fa-pause"); /*mengubah play ke pause jika ditekan*/
        logokontrol.classList.add("fa-play");   
    }
    else{
        music.play();
        logokontrol.classList.add("fa-pause"); /*mengubah pause ke play jika ditekan*/
        logokontrol.classList.remove("fa-play");
    }
}

if(music.play()){
    setInterval(()=>{
        progress.value = music.currentTime
    },500) /*memberikan update ke progress bar sampai dimana laju musik*/
}

progress.onchange = function(){
    music.play();
    music.currentTime = progress.value;
    logokontrol.classList.add("fa-pause");
    logokontrol.classList.remove("fa-play");
}

