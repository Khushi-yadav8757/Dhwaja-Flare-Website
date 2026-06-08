// Intersection Observer for Animations
const observerOptions = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target all elements with .fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});