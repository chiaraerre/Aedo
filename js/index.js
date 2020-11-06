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



// $(document).ready(function () {
//   $('#vib1').on('click', function() {
//     $('#vib1').vibrate({stopAfterTime:2});
//   });
//
//   $('#vib2').on('click', function() {
//     $('#vib2').vibrate({stopAfterTime:5, vibrateClass:'redSignal'});
//   });
//
//   $('#vib3').on('click', function() {
//     $('#vib3').vibrate({stopAfterTime:2, callBack: function() {
//       $('#vib3').text('Vibration Done');
//     }});
//   });
// });
