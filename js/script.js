/* ============================================
   VIBE CODING - JavaScript Interactions
   Popups, Animations, and Magic ✨
   ============================================ */

// Show popup function
function showPopup(popupId) {
    const popup = document.getElementById(popupId + 'Popup');
    const overlay = document.getElementById('popupOverlay');
    
    if (popup && overlay) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Trigger confetti effect (optional fun)
        triggerConfetti();
    }
}

// Close popup function
function closePopup(popupId) {
    const popup = document.getElementById(popupId + 'Popup');
    const overlay = document.getElementById('popupOverlay');
    
    if (popup && overlay) {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close all popups
function closeAllPopups() {
    const popups = document.querySelectorAll('.popup');
    const overlay = document.getElementById('popupOverlay');
    
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Smooth scroll to section
function smoothScroll(sectionId) {
    const section = document.getElementById(sectionId) || document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Trigger confetti effect
function triggerConfetti() {
    const confettiCount = 30;
    const colors = ['#ec3750', '#ffd166', '#17171d', '#338eda', '#ff8c37'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.innerHTML = '🎉';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.animation = `confettiFall ${2 + Math.random() * 1}s ease-out forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Easter egg - konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateVibeMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateVibeMode() {
    // Screen shake effect
    const body = document.body;
    body.style.animation = 'shake 0.5s ease-in-out';
    
    // Trigger massive confetti
    for (let i = 0; i < 5; i++) {
        setTimeout(() => triggerConfetti(), i * 100);
    }
    
    // Show special message
    alert('🎉 ULTIMATE VIBES ACTIVATED 🎉\n\nYou\'ve unlocked the hidden vibe power!\nCode like nobody\'s watching.');
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Close popup when ESC is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAllPopups();
    }
});

// Intersection Observer for scroll animations
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

// Observe all cards on page load
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => observer.observe(card));
});

// Add fun hover effects
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'wiggle 0.5s ease-in-out';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
});

// Random vibe message on page load
window.addEventListener('load', function() {
    const messages = [
        '✨ Welcome to the vibe realm, coder! ✨',
        '🚀 Your journey to better code starts now.',
        '🧡 Feeling the vibe yet?',
        '🎵 Sync your rhythm with your code.',
        '⚡ Ready to transform your craft?'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log('%c ' + randomMessage, 'color: #338eda; font-size: 16px; font-weight: bold; font-family: Comic Sans MS, cursive;');
});

// Scroll to top button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑ Back to Top ↑';
scrollButton.className = 'scroll-to-top-btn';
scrollButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #338eda 0%, #0d99ff 100%);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    z-index: 99;
    font-family: 'Comic Neue', cursive;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
`;

scrollButton.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

scrollButton.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

document.body.appendChild(scrollButton);

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Random emoji cursor (optional fun feature)
document.addEventListener('DOMContentLoaded', function() {
    const emojis = ['✨', '🎵', '⚡', '🧡', '🚀', '🎨'];
    let currentEmoji = 0;
    
    // Change cursor emoji periodically (comment out if too annoying)
    // setInterval(function() {
    //     document.body.style.cursor = 'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22><text y=%2232%22 font-size=%2232%22>' + emojis[currentEmoji] + '</text></svg>") 16 0, auto';
    //     currentEmoji = (currentEmoji + 1) % emojis.length;
    // }, 2000);
});

// Auto-show welcome popup on first visit (optional)
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has visited before
    if (!localStorage.getItem('vibeCodeVisited')) {
        // Comment out below line if you don't want auto-popup
        // setTimeout(() => showPopup('welcome'), 1000);
        localStorage.setItem('vibeCodeVisited', 'true');
    }
});
