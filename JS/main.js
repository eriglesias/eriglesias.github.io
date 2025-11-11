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
    
    const setupIntersectionObserver = function() {
        // Create the observer instance
        const observer = new IntersectionObserver((entries) => {
            // For each observed element
            entries.forEach(entry => {
                // When element becomes visible
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            // Trigger when at least 10% of the element is visible
            threshold: 0.1,
            // Start observing a bit before the element comes into view
            rootMargin: '0px 0px -100px 0px'
        });
        
        // Observe all elements that need the fade-in effect
        document.querySelectorAll('.about, .contact').forEach(element => {
            observer.observe(element);
        });
    };
    
    // Initialize the intersection observer
    setupIntersectionObserver();
    

    
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(e){
        // Only prevent default if it's a same-page link
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
            location.hostname === this.hostname) {
            e.preventDefault();
            
            // Close burger menu when clicking a link
            burgerIcon.removeClass('active');
            navbarMenu.removeClass('active');
            
            // Get the target element
            const target = $(this.hash);
            const targetElement = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            // If target exists, scroll to it
            if (targetElement.length) {
                // Using a shorter animation duration can make scrolling feel more responsive
                $('html, body').animate({
                    scrollTop: targetElement.offset().top
                }, 300); // Reduced from 500ms to 300ms for quicker response
            }
        }
    });
    
    // Run the visibility check once on page load to show elements already in view
    document.querySelectorAll('.about, .contact').forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});