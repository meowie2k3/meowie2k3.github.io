// Load sections configuration from JSON file
async function loadSections() {
    try {
        const response = await fetch('sections.json');
        if (!response.ok) {
            throw new Error('Failed to load sections.json');
        }
        return await response.json();
    } catch (e) {
        console.error('Error loading sections:', e);
        return [];
    }
}

// Generate navigation cards dynamically
function generateCards(sections) {
    const gridContainer = document.querySelector('.grid-container');
    if (!gridContainer) return;

    // Clear existing cards
    gridContainer.innerHTML = '';

    // Create card for each section
    sections.forEach(section => {
        const card = document.createElement('a');
        card.href = `${section.name}/`;
        card.className = `card card-${section.name}`;

        card.innerHTML = `
            <div class="card-icon">${section.icon}</div>
            <h3 class="card-title">${section.title}</h3>
            <p class="card-description">${section.description}</p>
            <span class="card-arrow">→</span>
        `;

        gridContainer.appendChild(card);
    });
}

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize cards and animations
document.addEventListener('DOMContentLoaded', async () => {
    // Load and generate cards dynamically
    const sections = await loadSections();
    generateCards(sections);

    // Animate cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add click ripple effect
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(108, 99, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
