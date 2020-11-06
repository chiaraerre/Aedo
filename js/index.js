
function clickPelle() {
  $("#vibrolino").text("pellino");
  $("#vibrolino").vibrate("long");
}

function clickCapelli() {
  $("#vibrolino").text("capellino");
  $("#vibrolino").vibrate("long");
}

function clickVestito() {
  $("#vibrolino").text("vestitino");
  $("#vibrolino").vibrate("long");
}

function clickSfondo() {
  $("#vibrolino").text("sfondino");
  $("#vibrolino").vibrate("long");
}


function clickCielo() {
  $("#vibrolino").text("cielino");
  $("#vibrolino").vibrate("long");
}

$("#pelle").on("click", clickPelle)
$("#capelli").on("click", clickCapelli)
$("#vestito").on("click", clickVestito)
$("#sfondo").on("click", clickSfondo)
$("#cielo").on("click", clickCielo)

var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);

$(".button").on(isMobile ? 'touchstart' : 'mousedown', function(e) {
    navigator.vibrate(Infinity); // Infinity is a number
});

$(".button").on(isMobile ? 'touchend' : 'mouseup', function(e) {
    navigator.vibrate(0);
});
