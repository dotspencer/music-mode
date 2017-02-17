var videoId;
var thumb = document.querySelector('.thumbnail');
var title = document.querySelector('.title');

var controls = document.querySelector('.controls');
var play_btn = document.querySelector('.play');
var restart_btn = document.querySelector('.restart');

play_btn.addEventListener('click', playPausePress);
restart_btn.addEventListener('click', restart);

function playPausePress(){
  if(play_btn.classList.contains('pause')){
    pause();
  } else {
    play();
  }
}

function updateProgress(){
  requestAnimationFrame(updateProgress);

  var percent = (player.getCurrentTime() / duration) * 100;
  controls.style.background = "linear-gradient(to right, indianred " + percent + "%, rgba(255, 255, 255, 0.15) 0%)";
}

function play(){
  play_btn.style.backgroundImage = "url('/img/pause.svg')";
  play_btn.classList.add('pause');
  player.playVideo();
}

function pause(){
  play_btn.style.backgroundImage = "url('/img/play.svg')";
  play_btn.classList.remove('pause');
  player.pauseVideo();
}

function restart(){
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

function hide(element){
  element.classList.add('hidden');
}

function show(element){
  element.classList.remove('hidden');
}

function fadeIn(element){
  element.classList.add('fade-in');
}

function loadVideo(id){
  videoId = id;
  setThumbnail();

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

function idFromUrl(){
  return window.location.search.match(/id=(.*)/)[1];
}

function setThumbnail(){
  var thumb = document.querySelector('.thumbnail');
  thumb.style.backgroundImage = "url('https://img.youtube.com/vi/" + videoId + "/0.jpg')"
}

function showTitle(){
  title.innerText = player.getVideoData().title;
}

loadVideo(idFromUrl());
