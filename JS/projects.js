// projects.js

document.addEventListener('DOMContentLoaded', function() {
   
    const projectItems = document.querySelectorAll('.project_item');
    
    // Add staggered animation effect on page load
    projectItems.forEach((item, index) => {
        // Stagger the animation with a slight delay for each item
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
   // intersection observer for scroll animations
    if ('IntersectionObserver' in window) {
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
    
   // subtle animation to Back to Home button
    const backHomeBtn = document.querySelector('.back_home');
    if (backHomeBtn) {
        backHomeBtn.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    }
});