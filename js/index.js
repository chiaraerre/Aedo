var audioGenerale = document.createElement('audio');
var audioPelle = document.createElement('audio');
var audioCapelli = document.createElement('audio');
var audioVestito = document.createElement('audio');
var audioSfondo = document.createElement('audio');
var audioCielo = document.createElement('audio');
var audioIntro = document.createElement('audio');

audioGenerale.setAttribute('src', 'audio/generale.mp3');
audioPelle.setAttribute('src', 'audio/pelle.mp3');
audioCapelli.setAttribute('src', 'audio/capelli.mp3');
audioVestito.setAttribute('src', 'audio/vestito.mp3');
audioSfondo.setAttribute('src', 'audio/sfondo.mp3');
audioCielo.setAttribute('src', 'audio/smile.mp3');
audioIntro.setAttribute('src', 'audio/introduction.mp3');

var currentAudio = audioIntro;

function playSound() {
  currentAudio.play();
  $("#pause").css("background", "#fff");
  $("#play").css("background", "#999");
};

function pauseSound() {
  currentAudio.pause();
  $("#play").css("background", "#fff");
  $("#pause").css("background", "#999");
};

function restartSound() {
  currentAudio.currentTime = 0;
  $("#restart").css("background", "#999");
  setTimeout(function(){
    $("#restart").css("background", "#fff");
}, 200);
};

function startDemo() {
  $("#intro").css("display", "none");
  playSound();
  $("#status").text("Intro Playing");
}

  $("#intro").dblclick(startDemo);

$('#play').click(playSound);
$('#pause').click(pauseSound);
$('#restart').click(restartSound);

function restart() {
  $("#status").text("Not Playing");

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

  $("#play").css("background", "#fff");
  $("#pause").css("background", "#999");
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

$("#pelle").on("mousedown", clickPelle)
$("#capelli").on("mousedown", clickCapelli)
$("#vestito").on("mousedown", clickVestito)
$("#sfondo").on("mousedown", clickSfondo)
$("#cielo").on("mousedown", clickCielo)

$("#pelle").on("mouseup", stopVibrating)
$("#capelli").on("mouseup", stopVibrating)
$("#vestito").on("mouseup", stopVibrating)
$("#sfondo").on("mouseup", stopVibrating)
$("#cielo").on("mouseup", stopVibrating)


function doubleClickPelle() {
  restart();
  currentAudio = audioPelle;
  playSound();
  $("#status").text("Skin Playing");
}

function doubleClickCapelli() {
  restart();
  currentAudio = audioCapelli;
  playSound();
  $("#status").text("Hair Playing");
}

function doubleClickVestito() {
  restart();
  currentAudio = audioVestito;
  playSound();
  $("#status").text("Clothes Playing");
}

function doubleClickSfondo() {
  restart();
  currentAudio = audioSfondo;
  playSound();
  $("#status").text("Background Playing");
}

function doubleClickCielo() {
  restart();
  currentAudio = audioGenerale;
  playSound();
  $("#status").text("Sky Playing");
}

$("#pelle").on("dblclick", doubleClickPelle)
$("#capelli").on("dblclick", doubleClickCapelli)
$("#vestito").on("dblclick", doubleClickVestito)
$("#sfondo").on("dblclick", doubleClickSfondo)
$("#cielo").on("dblclick", doubleClickCielo)
