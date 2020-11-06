


function clickPelle() {
  navigator.vibrate(0);
  $("#vibrolino").text("pellino");
  navigator.vibrate([500, 1000, 500, 1000, 500, 1000]);
}

function clickCapelli() {
  navigator.vibrate(0);
  $("#vibrolino").text("capellino");
  navigator.vibrate([1000, 500, 1000, 500, 1000, 500]);
}

function clickVestito() {
  navigator.vibrate(0);
  $("#vibrolino").text("vestitino");
  navigator.vibrate([500, 500, 500, 500, 500, 500]);
}

function clickSfondo() {
  navigator.vibrate(0);
  $("#vibrolino").text("sfondino");
  navigator.vibrate([500, 100, 500, 100, 500, 100]);
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
