function clickPelle() {
  $("#vibrolino").text("pellino");
  $("#vibrolino .button").vibrate({ pattern: [1000, 200, 1000]});
}

function clickCapelli() {
  $("#vibrolino").text("capellino");
  $("#vibrolino .button").vibrate({ pattern: [500, 100, 500]});
}

function clickVestito() {
  $("#vibrolino").text("vestitino");
  $("#vibrolino .button").vibrate({ pattern: [1000, 100, 1000,100,1000]});
}

function clickSfondo() {
  $("#vibrolino").text("sfondino");
  $("#vibrolino .button").vibrate({ pattern: [1000, 200, 1000]});
}


function clickCielo() {
  $("#vibrolino").text("cielino");
}

$("#pelle").on("click", clickPelle)
$("#capelli").on("click", clickCapelli)
$("#vestito").on("click", clickVestito)
$("#sfondo").on("click", clickSfondo)
$("#cielo").on("click", clickCielo)
