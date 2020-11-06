function clickPelle() {
  $("#vibrolino").text("pellino")
}

function clickCapelli() {
  $("#vibrolino").text("capellino")
}

function clickVestito() {
  $("#vibrolino").text("vestitino");
  $('#vib1').vibrate({stopAfterTime:2});
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



$(document).ready(function () {
  $('#vib1').on('click', function() {
    $('#vib1').vibrate({stopAfterTime:2});
  });

  $('#vib2').on('click', function() {
    $('#vib2').vibrate({stopAfterTime:5, vibrateClass:'redSignal'});
  });

  $('#vib3').on('click', function() {
    $('#vib3').vibrate({stopAfterTime:2, callBack: function() {
      $('#vib3').text('Vibration Done');
    }});
  });
});
</script>

<div id="demoDiv">
  <div class="signals" id="vib1">
    Vibrate me for 2s
  </div>
  <div class="signals" id="vib2">
    Vibrate me for 5s and turn me red
  </div>
  <div class="signals" id="vib3">
    Change my text
  </div>
</div>
