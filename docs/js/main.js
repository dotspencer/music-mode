let videoId;
let playerReady = false;
const thumb = document.querySelector('.thumbnail');
const title = document.querySelector('.title');

const controls = document.querySelector('.controls');
const play_btn = document.querySelector('.play');
const restart_btn = document.querySelector('.restart');
const welcome = document.querySelector('.welcome');
const errorNotice = document.querySelector('.error-notice');

play_btn.addEventListener('click', playPausePress);
restart_btn.addEventListener('click', restart);

loadVideo(idFromUrl());

setTimeout(() => {
  if (!playerReady) {
    errorNotice.classList.remove('hidden');
  }
}, 3000);

function loadVideo(id) {
  videoId = id;

  // If no video id is provided in url
  if(videoId == null){
    show(welcome);
    // Set default title
    var mTitle = document.createElement('title');
    mTitle.innerText = "YT Music Mode";
    document.head.appendChild(mTitle);
    return;
  }

  setThumbnail();

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

function idFromUrl() {
  var match = window.location.search.match(/id=(.*)/);
  if(match == null || match.length != 2){
    return null;
  }
  return match[1];
}

function setThumbnail() {
  var thumb = document.querySelector('.thumbnail');
  thumb.style.backgroundImage = "url('https://img.youtube.com/vi/" + videoId + "/0.jpg')"
}

function showTitle() {
  // Setting title text
  var text = player.getVideoData().title;
  title.innerText = text;

  // Setting meta title
  var mTitle = document.createElement('title');
  mTitle.innerText = text;
  document.head.appendChild(mTitle);
}

function playPausePress() {
  if(play_btn.classList.contains('pause')){
    pause();
  } else {
    play();
  }
}

function updateProgress() {
  requestAnimationFrame(updateProgress);

  var percent = (player.getCurrentTime() / duration) * 100;
  controls.style.background = "linear-gradient(to right, indianred " + percent + "%, rgba(255, 255, 255, 0.15) 0%)";
}

function play() {
  play_btn.style.backgroundImage = "url('img/pause.svg')";
  play_btn.classList.add('pause');
  player.playVideo();
}

function pause() {
  play_btn.style.backgroundImage = "url('img/play.svg')";
  play_btn.classList.remove('pause');
  player.pauseVideo();
}

function restart() {
  if(restart_btn.classList.contains('spin')){
    return;
  }
  show(play_btn);

  restart_btn.classList.add('spin');
  player.seekTo(0);
  play();

  setTimeout(function(){
    restart_btn.classList.remove('spin');
  }, 700);
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function fadeIn(element) {
  element.classList.add('fade-in');
}
