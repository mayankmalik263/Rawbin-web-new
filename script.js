/**
 * Rawbin Interactions and Animations
 */

document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for fade-up animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
    
    // Add interactive 3D tilt effect on cards for a premium feel
    const cards = document.querySelectorAll('.step-card, .transform-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });

    function handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5; // Max rotation 5deg
        const rotateY = ((x - centerX) / centerX) * 5;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        card.style.transition = 'transform 0.1s ease';
    }

    function handleMouseLeave(e) {
        const card = e.currentTarget;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
        card.style.transition = 'transform 0.5s ease';
    }

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;
            const isActive = currentItem.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const icon = item.querySelector('.faq-icon');
                if(icon) icon.textContent = '+';
            });
            
            // Toggle current item
            if (!isActive) {
                currentItem.classList.add('active');
                const icon = currentItem.querySelector('.faq-icon');
                if(icon) icon.textContent = '−'; // minus sign
            }
        });
    });
});
