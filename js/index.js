function clickPelle() {
  $("#vibrolino").text("manolino")
}

function clickCapelli() {
  $("#vibrolino").text("capellino")
}

function clickVestito() {
  $("#vibrolino").text("vestitino")
}

function clickSfondo() {
  $("#vibrolino").text("sfondino")
}


function clickCielo() {
  $("#vibrolino").text("cielino")
}

$("#pelle").on("click", clickPelle)
$("#capelli").on("click", clickCapelli)
$("#vestito").on("click", clickVestito)
$("#sfondo").on("click", clickSfondo)
$("#cielo").on("click", clickCielo)
