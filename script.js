// ===========================
// LANGUAGE SWITCHING
// ===========================

const langButtons = document.querySelectorAll('.lang-btn');
const ptElements = document.querySelectorAll('*:not(.lang-btn)');
const enElements = document.querySelectorAll('.hero-description-en, .about-text-en, .question-text-en, .objective-general-en, .objective-card-en, .team-intro-en, .publications-intro-en, .footer-en');

let currentLanguage = 'pt';

langButtons.forEach(button => {
    button.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Toggle language content
    if (lang === 'pt') {
        // Show Portuguese
        document.querySelectorAll('.hero-description').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.hero-description-en').forEach(el => el.style.display = 'none');
        
        document.querySelectorAll('.about-text').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.about-text-en').forEach(el => el.style.display = 'none');
        
        document.querySelectorAll('.question-text').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.question-text-en').forEach(el => el.style.display = 'none');
        
        document.querySelectorAll('.objective-general-en').forEach(el => el.style.display = 'none');
        
        document.querySelectorAll('.objective-card-en').forEach(el => el.style.display = 'none');
        
        document.querySelectorAll('.team-intro').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.team-intro-en').forEach(el => el.style.display = 'none');
        
        document.querySelectorAll('.publications-intro').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.publications-intro-en').forEach(el => el.style.display = 'none');
        
        document.querySelectorAll('.footer').forEach(el => {
            el.querySelector('p:first-child').style.display = 'block';
            el.querySelector('.footer-en').style.display = 'none';
        });
        
        // Update button text
        document.querySelector('.cta-button').textContent = 'Saiba Mais';
        
    } else if (lang === 'en') {
        // Show English
        document.querySelectorAll('.hero-description').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.hero-description-en').forEach(el => el.style.display = 'block');
        
        document.querySelectorAll('.about-text').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.about-text-en').forEach(el => el.style.display = 'block');
        
        document.querySelectorAll('.question-text').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.question-text-en').forEach(el => el.style.display = 'block');
        
        document.querySelectorAll('.objective-general-en').forEach(el => el.style.display = 'block');
        
        document.querySelectorAll('.objective-card-en').forEach(el => el.style.display = 'block');
        
        document.querySelectorAll('.team-intro').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.team-intro-en').forEach(el => el.style.display = 'block');
        
        document.querySelectorAll('.publications-intro').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.publications-intro-en').forEach(el => el.style.display = 'block');
        
        document.querySelectorAll('.footer').forEach(el => {
            el.querySelector('p:first-child').style.display = 'none';
            el.querySelector('.footer-en').style.display = 'block';
        });
        
        // Update button text
        document.querySelector('.cta-button').textContent = 'Learn More';
    }
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language preference
window.addEventListener('load', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'pt';
    switchLanguage(savedLanguage);
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// SMOOTH SCROLL BEHAVIOR
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and topics
document.querySelectorAll('.objective-card, .research-topic, .publication-item').forEach(el => {
    observer.observe(el);
});

// ===========================
// NAVBAR BACKGROUND ON SCROLL
// ===========================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================

window.addEventListener('scroll', function() {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// COUNTER ANIMATION
// ===========================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ===========================
// KEYBOARD NAVIGATION
// ===========================

document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Scroll to top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Log page analytics (optional)
function logPageView() {
    console.log('Page viewed at:', new Date().toLocaleString());
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    logPageView();
    
    // Add any additional initialization here
    console.log('RICA Project website loaded successfully');
});
