document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.left-section nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only prevent default for hash links (links to sections within the same page)
            if (targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (window.innerWidth <= 768) {
                        nav.style.display = 'none';
                    }
                }
            }
            // For regular page links, let the default behavior happen
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.style.display = '';
        }
    });
    
    // Button click handlers
    const hireMeBtn = document.querySelector('.hire-me');
    const seeProjectsBtn = document.querySelector('.see-projects');
    const letsTalkBtn = document.querySelector('.lets-talk');
    
    if (hireMeBtn) {
        hireMeBtn.addEventListener('click', function() {
            
        });
    }
    
    
    if (letsTalkBtn) {
        letsTalkBtn.addEventListener('click', function() {
            
        });
    }
});