import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const options = {
    quality: "720p",
    autoplay: true,
    controls: false,
};

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe, options);

const durationTime = 'current-time-play'
const savedTime = localStorage.getItem(durationTime);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) { 
    localStorage.setItem(durationTime, data.seconds)
}

if (savedTime) {
    player.setCurrentTime(savedTime)
    // console.log(savedTime);
}