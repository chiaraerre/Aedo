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
audioIntro.setAttribute('src', 'audio/intro.mp3');

var currentAudio = audioIntro;
var currentAudioName = "Intro";

function playSound() {
  currentAudio.play();
  $("#play").css("background", "#999");
  $("#pause").css("background", "#fff");
  $("#status").text(currentAudioName + " Playing");
  setInterval(function(){
    if (currentAudio.currentTime == currentAudio.duration) {
      $("#play").css("background", "#fff");
      $("#pause").css("background", "#999");
      $("#status").text("Not Playing");
    }
  }, 500);
};

function pauseSound() {
  currentAudio.pause();
  $("#play").css("background", "#fff");
  $("#pause").css("background", "#999");
  $("#status").text(currentAudioName + " Paused");
};

function restartSound() {
  currentAudio.currentTime = 0;
  $("#restart").css("background", "#999");
  setTimeout(function() {
    $("#restart").css("background", "#fff");
  }, 200);
  playSound();
};

function playInfo() {
  restart();
  currentAudio = audioIntro;
  currentAudioName = "Intro";
  $("#instructions").css("background", "#999");
  setTimeout(function() {
    $("#instructions").css("background", "#fff");
  }, 200);
  playSound();
}

$('#play').click(playSound);
$('#pause').click(pauseSound);
$('#restart').click(restartSound);
$('#instructions').click(playInfo);

function restart() {
  $("#status").text("Not Playing");

  currentAudio.pause();

  audioGenerale.currentTime = 0;
  audioPelle.currentTime = 0;
  audioCapelli.currentTime = 0;
  audioVestito.currentTime = 0;
  audioSfondo.currentTime = 0;
  audioCielo.currentTime = 0;
  audioIntro.currentTime = 0;

  $("#play").css("background", "#fff");
  $("#pause").css("background", "#999");
};

function startDemo() {
  $("#intro").css("display", "none");
  $("#tool").css("display", "block");
  playSound();
}

$("#intro").click(startDemo);

function clickPelle() {
  navigator.vibrate(0);
  $("#vibrolino").text("Skin Vibrating");
  navigator.vibrate([50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500, 50, 500]);
}

function clickCapelli() {
  navigator.vibrate(0);
  $("#vibrolino").text("Hair Vibrating");
  navigator.vibrate([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
}

function clickVestito() {
  navigator.vibrate(0);
  $("#vibrolino").text("Clothes Vibrating");
  navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100]);
}

function clickSfondo() {
  navigator.vibrate(0);
  $("#vibrolino").text("Background Vibrating");
  navigator.vibrate([1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50]);
}

function clickCielo() {
  navigator.vibrate(0);
  $("#vibrolino").text("Not Vibrating");
  navigator.vibrate("long");
}

function stopVibrating() {
  $("#vibrolino").text("Not Vibrating");
  navigator.vibrate(0);
}

$("#pelle").on("touchstart touchend", clickPelle)
$("#capelli").on("touchstart touchend", clickCapelli)
$("#vestito").on("touchstart touchend", clickVestito)
$("#sfondo").on("touchstart touchend", clickSfondo)
$("#cielo").on("touchstart touchend", clickCielo)

// $("#pelle").on("touchend", stopVibrating)
// $("#capelli").on("touchend", stopVibrating)
// $("#vestito").on("touchend", stopVibrating)
// $("#sfondo").on("touchend", stopVibrating)
// $("#cielo").on("touchend", stopVibrating)
//
// $("#pelle").on("mousedown", clickPelle)
// $("#capelli").on("mousedown", clickCapelli)
// $("#vestito").on("mousedown", clickVestito)
// $("#sfondo").on("mousedown", clickSfondo)
// $("#cielo").on("mousedown", clickCielo)
//
// $("#pelle").on("mouseup", stopVibrating)
// $("#capelli").on("mouseup", stopVibrating)
// $("#vestito").on("mouseup", stopVibrating)
// $("#sfondo").on("mouseup", stopVibrating)
// $("#cielo").on("mouseup", stopVibrating)


function doubleClickPelle() {
  restart();
  currentAudio = audioPelle;
  currentAudioName = "Skin";
  playSound();
}

function doubleClickCapelli() {
  restart();
  currentAudio = audioCapelli;
  currentAudioName = "Hair";
  playSound();
}

function doubleClickVestito() {
  restart();
  currentAudio = audioVestito;
  currentAudioName = "Clothes";
  playSound();
}

function doubleClickSfondo() {
  restart();
  currentAudio = audioSfondo;
  currentAudioName = "Background";
  playSound();
}

function doubleClickCielo() {
  restart();
  currentAudio = audioGenerale;
  currentAudioName = "Sky";
  playSound();
}

$("#pelle").on("dblclick", doubleClickPelle)
$("#capelli").on("dblclick", doubleClickCapelli)
$("#vestito").on("dblclick", doubleClickVestito)
$("#sfondo").on("dblclick", doubleClickSfondo)
$("#cielo").on("dblclick", doubleClickCielo)
