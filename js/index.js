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
  navigator.vibrate(0);
  $("#vibrolino").text("Skin Vibrating");
  navigator.vibrate([50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500]);

  restart();
  // currentAudio = audioPelle;
  // currentAudio.play();
  // $("#status").text("Status: Skin Playing");
}

function clickCapelli() {
  navigator.vibrate(0);
  $("#vibrolino").text("Hair Vibrating");
  navigator.vibrate([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);

  restart();
  // currentAudio = audioCapelli;
  // currentAudio.play();
  // $("#status").text("Status: Hair Playing");
}

function clickVestito() {
  navigator.vibrate(0);
  $("#vibrolino").text("Clothes Vibrating");
  navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100]);

  restart();
  // currentAudio = audioVestito;
  // currentAudio.play();
  // $("#status").text("Status: Clothes Playing");
}

function clickSfondo() {
  navigator.vibrate(0);
  $("#vibrolino").text("Background (Not Vibrating)");
  navigator.vibrate([1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50]);

  restart();
  // currentAudio = audioSfondo;
  // currentAudio.play();
  // $("#status").text("Status: Background Playing");
}

function clickCielo() {
  navigator.vibrate(0);
  $("#vibrolino").text("Hair Vibrating");
  navigator.vibrate("long");

  restart();
  // currentAudio = audioGenerale;
  // currentAudio.play();
  // $("#status").text("Status: Sky Playing");
}

function stopVibrating() {
  $("#vibrolino").text("Not Vibrating");
  navigator.vibrate(0);
}

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
