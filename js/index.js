var audioGenerale = document.createElement('audio');
var audioPelle = document.createElement('audio');
var audioCapelli = document.createElement('audio');
var audioVestito = document.createElement('audio');
var audioSfondo = document.createElement('audio');
var audioCielo = document.createElement('audio');

audioGenerale.setAttribute('src', 'audio/generale.mp3');
audioPelle.setAttribute('src', 'audio/pelle.mp3');
audioCapelli.setAttribute('src', 'audio/capelli.mp3');
audioVestito.setAttribute('src', 'audio/vestito.mp3');
audioSfondo.setAttribute('src', 'audio/sfondo.mp3');
audioCielo.setAttribute('src', 'audio/smile.mp3');

var currentAudio = audioGenerale;

$('#play').click(function() {
  currentAudio.play();
  $("#status").text("Status: Playing");
});

$('#pause').click(function() {
  currentAudio.pause();
  $("#status").text("Status: Paused");
});

$('#restart').click(function() {
  currentAudio.currentTime = 0;
});

function restart() {
  audioGenerale.pause();
  audioPelle.pause();
  audioCapelli.pause();
  audioVestito.pause();
  audioSfondo.pause();
  audioCielo.pause();

  audioGenerale.currentTime = 0;
  audioPelle.currentTime = 0;
  audioCapelli.currentTime = 0;
  audioVestito.currentTime = 0;
  audioSfondo.currentTime = 0;
  audioCielo.currentTime = 0;
};

function clickPelle() {
  if(currentAudio !== audioPelle) {restart()};
  navigator.vibrate(0);
  $("#vibrolino").text("Skin Vibrating");
  navigator.vibrate([50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500]);
}

function clickCapelli() {
  if(currentAudio !== audioCapelli) {restart()};
  navigator.vibrate(0);
  $("#vibrolino").text("Hair Vibrating");
  navigator.vibrate([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
}

function clickVestito() {
  if(currentAudio !== audioVestito) {restart()};
  navigator.vibrate(0);
  $("#vibrolino").text("Clothes Vibrating");
  navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100]);
}

function clickSfondo() {
  if(currentAudio !== audioSfondo) {restart()};
  navigator.vibrate(0);
  $("#vibrolino").text("Background Vibrating");
  navigator.vibrate([1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50]);
}

function clickCielo() {
  if(currentAudio !== audioCielo) {restart()};
  navigator.vibrate(0);
  $("#vibrolino").text("Not Vibrating");
  navigator.vibrate("long");
}

function stopVibrating() {
  $("#vibrolino").text("Not Vibrating");
  navigator.vibrate(0);
}

$("#pelle").on("touchstart", clickPelle)
$("#capelli").on("touchstart", clickCapelli)
$("#vestito").on("touchstart", clickVestito)
$("#sfondo").on("touchstart", clickSfondo)
$("#cielo").on("touchstart", clickCielo)

$("#pelle").on("touchend", stopVibrating)
$("#capelli").on("touchend", stopVibrating)
$("#vestito").on("touchend", stopVibrating)
$("#sfondo").on("touchend", stopVibrating)
$("#cielo").on("touchend", stopVibrating)


function doubleClickPelle() {
  restart();
  currentAudio = audioPelle;
  currentAudio.play();
  $("#status").text("Skin Playing");
}

function doubleClickCapelli() {
  restart();
  currentAudio = audioCapelli;
  currentAudio.play();
  $("#status").text("Hair Playing");
}

function doubleClickVestito() {
  restart();
  currentAudio = audioVestito;
  currentAudio.play();
  $("#status").text("Clothes Playing");
}

function doubleClickSfondo() {
  restart();
  currentAudio = audioSfondo;
  currentAudio.play();
  $("#status").text("Background Playing");
}

function doubleClickCielo() {
  restart();
  currentAudio = audioGenerale;
  currentAudio.play();
  $("#status").text("Sky Playing");
}

$("#pelle").on("dblclick", doubleClickPelle)
$("#capelli").on("dblclick", doubleClickCapelli)
$("#vestito").on("dblclick", doubleClickVestito)
$("#sfondo").on("dblclick", doubleClickSfondo)
$("#cielo").on("dblclick", doubleClickCielo)
