


function clickPelle() {
  navigator.vibrate(0);
  $("#vibrolino").text("pellino");
  navigator.vibrate([1000]);
}

function clickCapelli() {
  navigator.vibrate(0);
  $("#vibrolino").text("capellino");
  navigator.vibrate(Infinity);
}

function clickVestito() {
  navigator.vibrate(0);
  $("#vibrolino").text("vestitino");
  navigator.vibrate("long");
}

function clickSfondo() {
  navigator.vibrate(0);
  $("#vibrolino").text("sfondino");
  navigator.vibrate("long");
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
