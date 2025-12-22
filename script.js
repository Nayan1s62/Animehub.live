// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
        if (hamburger) {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll(
        '.wallpaper-card, .category-card, .series-card, .character-card'
    );

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;

        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

// Initialize animations
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (!targetElement) return;

        e.preventDefault();
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Newsletter form (local only – no tracking)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');

        if (emailInput && emailInput.value.trim() !== '') {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        }
    });
}
