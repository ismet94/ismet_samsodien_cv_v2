// This controls the effects timing
AOS.init({
    duration: 2800,
  })
  

// Back to top script
$(window).scroll(function() {
  // Once scrolled pass 60px then the arrow appears
  if ($(this).scrollTop() >= 50) {     
     // The arrow fades in 
      $('#return-to-top').fadeIn(200);   
  } else {
    // Else the arrow would fade out
      $('#return-to-top').fadeOut(200);   
  }
});
// When clicked the function would return to top
$('#return-to-top').click(function() {      
  $('body,html').animate({
     // Scroll back to the top of the body
      scrollTop : 0                      
  }, 500);
});