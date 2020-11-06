function clickCapelli() {
  $("#vibrolino").text("capellino")
}

function clickMani() {
  $("#vibrolino").text("manolino")
}

function clickVestito() {
  $("#vibrolino").text("vestitino")
}

function clickFaccia() {
  $("#vibrolino").text("faccino")
}

function clickSfondo() {
  $("#vibrolino").text("sfondino")
}

$("#capelli").on("click", clickCapelli)
$("#mani").on("click", clickMani)
$("#vestito").on("click", clickVestito)
$("#faccia").on("click", clickFaccia)
$("#sfondo").on("click", clickSfondo)
