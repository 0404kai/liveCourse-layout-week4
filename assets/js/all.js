"use strict";

$('#burger').on('click', function () {
  $('#burger').toggleClass('open');
  $('#menu').slideToggle();
});
$('#optical').on('click', function () {
  $('#sunglassesContent').fadeOut();
  $('#sunglasses').parent('li').toggleClass('border-b-8 border-b-claret');
  $('#opticalContent').fadeIn();
  $('#optical').parent('li').toggleClass('border-b-8 border-b-claret');
});
$('#sunglasses').on('click', function () {
  $('#opticalContent').fadeOut();
  $('#optical').parent('li').toggleClass('border-b-8 border-b-claret');
  $('#sunglassesContent').fadeIn();
  $('#sunglasses').parent('li').toggleClass('border-b-8 border-b-claret');
});
$('#details').on('click', function () {
  $('#area, #branch').fadeToggle('hidden');
});
//# sourceMappingURL=all.js.map
