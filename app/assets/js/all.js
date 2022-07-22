$('#burger').on('click', () =>{
  $('#burger').toggleClass('open');
  $('#menu').slideToggle();
});

$('#optical').on('click', () =>{
  $('#sunglassesContent').fadeOut();
  $('#sunglasses').parent('li').toggleClass('border-b-8 border-b-claret')
  $('#opticalContent').fadeIn();
  $('#optical').parent('li').toggleClass('border-b-8 border-b-claret')
})

$('#sunglasses').on('click', () =>{
  $('#opticalContent').fadeOut();
  $('#optical').parent('li').toggleClass('border-b-8 border-b-claret')
  $('#sunglassesContent').fadeIn();
  $('#sunglasses').parent('li').toggleClass('border-b-8 border-b-claret')
})

$('#details').on('click', () =>{
  $('#area, #branch').fadeToggle('hidden');
})