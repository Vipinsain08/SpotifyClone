console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('musicrangebar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitems'));
let playIcons = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i) => {
    let imgElement = element.querySelector('img');
    let songNameElement = element.querySelector('.songName');
    let playIcon = element.querySelector('.songItemPlay');

    imgElement.src = songs[i].coverPath;
    songNameElement.innerText = songs[i].songName;

    playIcon.addEventListener('click', () => {
        makeAllPlays();
        songIndex = i;
        playIcon.classList.remove('fa-play-circle');
        playIcon.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    updateSong();
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    updateSong();
});

function updateSong() {
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}

function makeAllPlays() {
    playIcons.forEach((icon) => {
        icon.classList.remove('fa-pause-circle');
        icon.classList.add('fa-play-circle');
    });
}
