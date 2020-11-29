var audioGenerale = document.createElement('audio');
var audioMani = document.createElement('audio');
var audioFaccia = document.createElement('audio');
var audioCapelli = document.createElement('audio');
var audioVestito = document.createElement('audio');
var audioSfondo = document.createElement('audio');
var audioCielo = document.createElement('audio');
var audioIstruzioni = document.createElement('audio');
var audioInfo = document.createElement('audio');

audioGenerale.setAttribute('src', 'audio/generale.mp3');
audioMani.setAttribute('src', 'audio/mani.mp3');
audioFaccia.setAttribute('src', 'audio/faccia.mp3');
audioCapelli.setAttribute('src', 'audio/capelli.mp3');
audioVestito.setAttribute('src', 'audio/vestito.mp3');
audioSfondo.setAttribute('src', 'audio/sfondo.mp3');
audioCielo.setAttribute('src', 'audio/cielo.mp3');
audioIstruzioni.setAttribute('src', 'audio/istruzioni.mp3');
audioInfo.setAttribute('src', 'audio/info.mp3');

var currentAudio = audioGenerale;
var currentAudioName = "General";
var playing;
var speed = 1;

function playSound() {
  currentAudio.play();
  playing = true
  $("#icon-play").css("display", "inline-block");
  $("#icon-pause").css("display", "none");
  $("#status").text(currentAudioName + " Playing");
  setInterval(function() {
    if (currentAudio.currentTime == currentAudio.duration) {
      $("#icon-play").css("display", "none");
      $("#icon-pause").css("display", "inline-block");
      $("#icon-info").css("display", "inline-block");
      $("#icon-infoActive").css("display", "none");
      $("#status").text("Not Playing");
    }
  }, 500);

  setInterval(function() {
    if (speed == 1) {
      currentAudio.playbackRate = 1;
    } else {
      currentAudio.playbackRate = 1.3;
    }
  }), 500;
}

function pauseSound() {
  playing = false
  currentAudio.pause();
  $("#icon-play").css("display", "none");
  $("#icon-pause").css("display", "inline-block");
  $("#status").text(currentAudioName + " Paused");
};

function playPause() {
  if (playing == false) {
    playSound()
  } else {
    pauseSound()
  }
}

// function restartSound() {
//   currentAudio.currentTime = 0;
//   $("#restart").css("background", "#999");
//   setTimeout(function() {
//     $("#restart").css("background", "#fff");
//   }, 200);
//   playSound();
// };

function increaseSpeed() {
  speed = 2;
  $("#icon-speedFast").css("display", "inline-block");
  $("#icon-speedSlow").css("display", "none");
  currentAudio.playbackRate = 1.5;
};

function decreaseSpeed() {
  speed = 1;
  $("#icon-speedFast").css("display", "none");
  $("#icon-speedSlow").css("display", "inline-block");
  currentAudio.playbackRate = 1;
};

function toggleSpeed() {
  if (speed == 1) {
    increaseSpeed()
  } else {
    decreaseSpeed()
  }
}

function playInfo() {
  restart();
  currentAudio = audioInfo;
  currentAudioName = "Intro";
  playSound();
}

setInterval(function() {
  if ((currentAudioName == "Intro") & (currentAudio.currentTime < currentAudio.duration)) {
    $("#icon-info").css("display", "none");
    $("#icon-infoActive").css("display", "inline-block");
  } else {
    $("#icon-info").css("display", "inline-block");
    $("#icon-infoActive").css("display", "none");
  }
}), 500;

$('#play').click(playPause);
$('#pause').click(pauseSound);
$('#speed').click(toggleSpeed);
$('#instructions').click(playInfo);

function restart() {
  $("#status").text("Not Playing");

  currentAudio.pause();

  audioGenerale.currentTime = 0;
  audioMani.currentTime = 0;
  audioFaccia.currentTime = 0;
  audioCapelli.currentTime = 0;
  audioVestito.currentTime = 0;
  audioSfondo.currentTime = 0;
  audioCielo.currentTime = 0;
  audioIstruzioni.currentTime = 0;
  audioInfo.currentTime = 0;

  $("#play").css("background", "#fff");
  $("#pause").css("background", "#999");
};

// function startDemo() {
//   playSound();
// }

function startDemo() {
  playSound();
  $("#start").css("display", "none");
  $("lottie-player").css("display", "block");
  $("#skip").css("display", "block");
  // setTimeout(function() {
  //   startTool();
  // }, 59000);
  setInterval(function() {
    if (audioGenerale.currentTime == audioGenerale.duration) {
      startTool()
    }
  }, 2000);
}

function startTool() {
  restart();
  currentAudio = audioIstruzioni;
  playSound();
  $("body").css("background-color", "white");
  $("#intro").css("display", "none");
  $("#tool").css("display", "block");
}

$("#intro").click(startDemo);
$("#skip").click(startTool);



function clickPelle() {
  navigator.vibrate(0);
  $("#vibrolino").text("Skin Vibrating");
  navigator.vibrate([50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, 50, 20, 50, 700, ]);
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
  $("#vibrolino").text("Sky Vibrating");
  navigator.vibrate([50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700]);
}

function stopVibrating() {
  $("#vibrolino").text("Not Vibrating");
  navigator.vibrate(0);
}

$("#mani").on("touchstart", clickPelle);
$("#faccia").on("touchstart", clickPelle);
$("#capelli").on("touchstart", clickCapelli);
$("#vestito").on("touchstart", clickVestito);
$("#sfondo").on("touchstart", clickSfondo);
$("#cielo").on("touchstart", clickCielo);
//
// $("#pelle").on("touchend", stopVibrating)
// $("#capelli").on("touchend", stopVibrating)
// $("#vestito").on("touchend", stopVibrating)
// $("#sfondo").on("touchend", stopVibrating)
// $("#cielo").on("touchend", stopVibrating)

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


function doubleClickMani() {
  restart();
  currentAudio = audioMani;
  currentAudioName = "Hands";
  playSound();
}

function doubleClickFaccia() {
  restart();
  currentAudio = audioFaccia;
  currentAudioName = "Face";
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
  currentAudio = audioCielo;
  currentAudioName = "Sky";
  playSound();
}

$("#mani").on("dblclick", doubleClickMani);
$("#faccia").on("dblclick", doubleClickFaccia);
$("#capelli").on("dblclick", doubleClickCapelli);
$("#vestito").on("dblclick", doubleClickVestito);
$("#sfondo").on("dblclick", doubleClickSfondo);
$("#cielo").on("dblclick", doubleClickCielo);

var vibrating;

$("svg").on("touchmove", function(event) {
  // get the touch element
  var touch = event.originalEvent.touches[0];

  // get the DOM element
  var currentArea = document.elementFromPoint(touch.clientX, touch.clientY);

  console.log(vibrating)
  if (currentArea.classList.contains("cielo")) {
    if (vibrating != "cielo") {
      vibrating = "cielo"
      navigator.vibrate(0);
      $("#vibrolino").text("Sky Vibrating");
      navigator.vibrate([50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000]);
    }
  } else if (currentArea.classList.contains("sfondo")) {
    if (vibrating != "sfondo") {
      vibrating = "sfondo"
      navigator.vibrate(0);
      $("#vibrolino").text("Background Vibrating");
      navigator.vibrate([1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50, 1000, 50]);
    }
  } else if (currentArea.classList.contains("vestito")) {
    if (vibrating != "vestito") {
      vibrating = "vestito"
      navigator.vibrate(0);
      $("#vibrolino").text("Clothes Vibrating");
      navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100]);
    }
  } else if (currentArea.classList.contains("capelli")) {
    if (vibrating != "capelli") {
      vibrating = "capelli";
      navigator.vibrate(0);
      $("#vibrolino").text("Hair Vibrating");
      navigator.vibrate([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
    }
  } else if (currentArea.classList.contains("pelle")) {
    if (vibrating != "pelle") {
      vibrating = "pelle";
      navigator.vibrate(0);
      $("#vibrolino").text("Skin Vibrating");
      navigator.vibrate([50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700, 50, 50, 100, 700]);
    }
  }
});



$("svg").on("touchend", function() {
  stopVibrating()
});
