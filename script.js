// Counter animation
function animateCounter(id, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);
    const timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Start counter animations when the element is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateCounter("counter1", 0, 10, 1000);
            animateCounter("counter2", 0, 200, 1500);
            animateCounter("counter3", 0, 3, 1000);
            animateCounter("counter4", 0, 10, 1000);
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.querySelector('.counters'));

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-fadeIn, .animate-slideInFromLeft, .animate-slideInFromRight, .animate-slideInFromBottom');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.animationPlayState = 'running';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});