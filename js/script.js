
// slider
$('.slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
     
  });

// gallery 
$(document).ready(function(){
  $('.venobox').venobox({
    border : '10px',
    bgcolor : '#fff',
    framewidth : '700px',
    bgcolor : '#5dff5e',
    share      : ['facebook', 'twitter', 'download'],
    closeBackground: '#fff',
    closeColor : '#000',
    titleBackground : '#5556ff'
  }); 
});