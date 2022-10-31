import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_KEY);

positionAfterRestart();

function onPlay(currentTime) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime.seconds));
}

player.on('timeupdate', Throttle(onPlay, 1000));

function positionAfterRestart() {
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
