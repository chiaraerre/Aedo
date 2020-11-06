function clickPelle() {
  $("#vibrolino").text("pellino");
  $("#vibrolino").vibrate({pattern: [5, 200, 20]});
}

function clickCapelli() {
  $("#vibrolino").text("capellino");
  $("#vibrolino").vibrate({pattern: [5, 200, 20]});
}

function clickVestito() {
  $("#vibrolino").text("vestitino");
  $("#vibrolino").vibrate({pattern: [5, 200, 20]});
}

function clickSfondo() {
  $("#vibrolino").text("sfondino");
  $("#vibrolino").vibrate({pattern: [5, 200, 20]});
}


function clickCielo() {
  $("#vibrolino").text("cielino");
  $("#vibrolino").vibrate({pattern: [5, 200, 20]});
}

$("#pelle").on("click", clickPelle)
$("#capelli").on("click", clickCapelli)
$("#vestito").on("click", clickVestito)
$("#sfondo").on("click", clickSfondo)
$("#cielo").on("click", clickCielo)
