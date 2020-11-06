


function clickPelle() {
  navigator.vibrate(0);
  $("#vibrolino").text("pellino");
  navigator.vibrate([50, 500, 50, 500, 50, 500]);
}

function clickCapelli() {
  navigator.vibrate(0);
  $("#vibrolino").text("capellino");
  navigator.vibrate([50, 50, 50, 50, 50, 50, 50, 50]);
}

function clickVestito() {
  navigator.vibrate(0);
  $("#vibrolino").text("vestitino");
  navigator.vibrate([500, 500, 500, 500, 500, 500]);
}

function clickSfondo() {
  navigator.vibrate(0);
  $("#vibrolino").text("sfondino");
  navigator.vibrate([1000, 50, 1000, 50, 1000, 50]);
}


function clickCielo() {
  navigator.vibrate(0);
  $("#vibrolino").text("cielino");
  navigator.vibrate("long");
}

$("#pelle").on("click", clickPelle)
$("#capelli").on("click", clickCapelli)
$("#vestito").on("click", clickVestito)
$("#sfondo").on("click", clickSfondo)
$("#cielo").on("click", clickCielo)
