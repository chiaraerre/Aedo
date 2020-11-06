


function clickPelle() {
  $("#vibrolino").text("pellino");
  navigator.vibrate("long");
}

function clickCapelli() {
  $("#vibrolino").text("capellino");
  navigator.vibrate(Infinity);
}

function clickVestito() {
  $("#vibrolino").text("vestitino");
  navigator.vibrate("long");
}

function clickSfondo() {
  $("#vibrolino").text("sfondino");
  navigator.vibrate("long");
}


function clickCielo() {
  $("#vibrolino").text("cielino");
  navigator.vibrate("long");
}

$("#pelle").on("click", clickPelle)
$("#capelli").on("click", clickCapelli)
$("#vestito").on("click", clickVestito)
$("#sfondo").on("click", clickSfondo)
$("#cielo").on("click", clickCielo)
