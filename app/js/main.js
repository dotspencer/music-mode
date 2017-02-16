
var videoId;
function loadVideo(id){
  videoId = id;

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

function idFromUrl(){
  return window.location.search.match(/id=(.*)/)[1];
}

loadVideo(idFromUrl());
