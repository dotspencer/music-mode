var videoId;
var thumb = document.querySelector('.thumbnail');
var title = document.querySelector('.title');

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
