$(document).ready(function(){
  // Burger menu functionality
  const burgerMenu = $('.burger_menu');
  const burgerIcon = $('.burger_icon');
  const navbarMenu = $('.navbar_menu');

  burgerMenu.click(function(){
      burgerIcon.toggleClass('active');
      navbarMenu.toggleClass('active');
  });

  // Close menu when clicking outside
  $(document).click(function(event) {
      if (!burgerMenu.is(event.target) && !navbarMenu.is(event.target) && 
          navbarMenu.has(event.target).length === 0 && !burgerMenu.has(event.target).length) {
          burgerIcon.removeClass('active');
          navbarMenu.removeClass('active');
      }
  });

  // Handle scroll events
  $(window).on('scroll load', function(){
      burgerIcon.removeClass('active');
      navbarMenu.removeClass('active');

      if($(window).scrollTop() > 0){
          $('.top').show();
      }else{
          $('.top').hide();
      }
  });

  // Smooth scrolling
  $('a[href*="#"]').on('click', function(e){
      e.preventDefault();

      // Close burger menu when clicking a link
      burgerIcon.removeClass('active');
      navbarMenu.removeClass('active');

      // Smooth scroll to section
      $('html, body').animate({
          scrollTop : $($(this).attr('href')).offset().top,
      }, 500, 'linear');
  });
});