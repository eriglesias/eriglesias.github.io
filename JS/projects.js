// Mobile-optimized projects.js

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



document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project_item');
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) {
        projectItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    } else {
        // On mobile, just make all items visible immediately
        projectItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }
    
    // Handle touch interactions for mobile
    if (isMobile) {
        projectItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // Don't trigger if clicking on a link or button
                if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                    return;
                }
                
                const details = this.querySelector('.project_details');
                
                if (this.classList.contains('expanded')) {
                    this.classList.remove('expanded');
                    details.style.transform = '';
                } else {
                    document.querySelectorAll('.project_item.expanded').forEach(expandedItem => {
                        if (expandedItem !== this) {
                            expandedItem.classList.remove('expanded');
                            expandedItem.querySelector('.project_details').style.transform = '';
                        }
                    });
                    
                    this.classList.add('expanded');
                    details.style.transform = 'translateY(0)';
                }
            });
        });
    }
    
    // Only use intersection observer on desktop for better performance
    if (!isMobile && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in_view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        projectItems.forEach(item => {
            observer.observe(item);
        });
    }
    
    // Back home button animation
    const backHomeBtn = document.querySelector('.back_home');
    if (backHomeBtn) {
        backHomeBtn.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    }
    
    // Handle window resize to adjust behavior if needed
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth < 768;
        
        // If device type changed (mobile → desktop or desktop → mobile)
        if (newIsMobile !== isMobile) {
            // Reload the page to apply the correct behaviors
            location.reload();
        }
    });
});