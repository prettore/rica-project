// ===== LANGUAGE SWITCHING =====
const langButtons = document.querySelectorAll('.lang-btn');
const htmlElement = document.documentElement;

// Portuguese translations
const translations = {
    pt: {
        'home': 'Home',
        'about': 'Sobre',
        'objectives': 'Objetivos',
        'research': 'Pesquisa',
        'team': 'Equipe',
        'publications': 'Publicações',
        'about-title': 'Sobre o Projeto',
        'objectives-title': 'Objetivos',
        'research-title': 'Tópicos de Pesquisa',
        'team-title': 'Equipe',
        'publications-title': 'Publicações',
        'keywords-title': 'Palavras-chave'
    },
    en: {
        'home': 'Home',
        'about': 'About',
        'objectives': 'Objectives',
        'research': 'Research',
        'team': 'Team',
        'publications': 'Publications',
        'about-title': 'About the Project',
        'objectives-title': 'Objectives',
        'research-title': 'Research Topics',
        'team-title': 'Team',
        'publications-title': 'Publications',
        'keywords-title': 'Keywords'
    }
};

// Set current language
let currentLanguage = 'pt';

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        setLanguage(lang);
    });
});

function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    htmlElement.setAttribute('lang', lang);
    
    // Store preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update page content
    updatePageContent(lang);
}

function updatePageContent(lang) {
    // This function would update all text content based on language
    // For now, we keep the main content in Portuguese with English subtitles
    // In a full implementation, you would swap entire sections
    
    if (lang === 'en') {
        document.querySelector('.hero-subtitle').textContent = 'Reliable and Adaptive Intelligent Networks';
        document.querySelector('.hero-description').textContent = 'Investigating the operation and management of emerging networks for critical applications';
    } else {
        document.querySelector('.hero-subtitle').textContent = 'Redes Inteligentes Confiáveis e Adaptáveis';
        document.querySelector('.hero-description').textContent = 'Investigando a operação e gerenciamento de redes emergentes para aplicações críticas';
    }
}

// Load saved language preference
window.addEventListener('load', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'pt';
    setLanguage(savedLanguage);
});

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== NAVBAR ACTIVE LINK HIGHLIGHT =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function highlightActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveLink);

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.objective-card, .research-topic, .team-member-card, .publication-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== MOBILE MENU TOGGLE =====
// Add mobile menu functionality if needed in future
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Check if mobile menu already exists
    if (document.querySelector('.mobile-menu-toggle')) return;
    
    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'mobile-menu-toggle';
    toggleBtn.innerHTML = '☰';
    toggleBtn.style.display = 'none';
    
    // Insert before nav-menu
    navbar.insertBefore(toggleBtn, navMenu);
};

// ===== SCROLL TO TOP BUTTON =====
const createScrollToTopButton = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #1e3a8a, #7c3aed);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 24px;
        display: none;
        z-index: 99;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
            scrollBtn.style.alignItems = 'center';
            scrollBtn.style.justifyContent = 'center';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll to top
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseover', () => {
        scrollBtn.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseout', () => {
        scrollBtn.style.transform = 'scale(1)';
    });
};

// Initialize on page load
window.addEventListener('load', () => {
    createScrollToTopButton();
    highlightActiveLink();
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler
const debouncedScroll = debounce(highlightActiveLink, 100);
window.addEventListener('scroll', debouncedScroll);

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // Escape key
    if (e.key === 'Escape') {
        // Could close any open modals here
    }
    
    // Tab key for accessibility
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===== ANALYTICS PLACEHOLDER =====
// Add your analytics code here if needed
// Example: Google Analytics, Mixpanel, etc.

console.log('RICA Project Page Loaded Successfully');
console.log('Language:', currentLanguage);
