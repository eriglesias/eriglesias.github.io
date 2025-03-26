$(document).ready(function(){
    // Keep your existing burger menu functionality
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
    
    // Simple scroll effect
    function checkScroll() {
        $('.about, .contact').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (windowBottom > elementTop + 100) {
                $(this).addClass('visible');
            }
        });
    }
    
    // Run on scroll and on page load
    $(window).on('scroll', checkScroll);
    checkScroll(); // Run once on page load
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();
        
        // Close burger menu when clicking a link
        burgerIcon.removeClass('active');
        navbarMenu.removeClass('active');
        
        // Smooth scroll to section
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});