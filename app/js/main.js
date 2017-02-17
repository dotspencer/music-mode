var videoId;
var thumb = document.querySelector('.thumbnail');
var title = document.querySelector('.title');

var controls = document.querySelector('.controls');
var play_btn = document.querySelector('.play');
var pause_btn = document.querySelector('.pause');
var restart_btn = document.querySelector('.restart');

play_btn.addEventListener('click', play);
pause_btn.addEventListener('click', pause);
restart_btn.addEventListener('click', restart);

function play(){
  hide(play_btn);
  show(pause_btn);
  player.playVideo();
}

function pause(){
  hide(pause_btn);
  show(play_btn);
  player.pauseVideo();
}

function restart(){
  if(restart_btn.classList.contains('spin')){
    return;
  }

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
  thumb.style.backgroundImage = "url('https://img.youtube.com/vi/" + videoId + "/mqdefault.jpg')"
}

function showTitle(){
  title.innerText = player.getVideoData().title;
}

loadVideo(idFromUrl());
