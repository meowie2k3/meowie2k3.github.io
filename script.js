// Add interactive sparkles on click/touch
document.addEventListener('click', function(e) {
    createSparkle(e.clientX, e.clientY);
});

// Add touch support for mobile devices
document.addEventListener('touchend', function(e) {
    if (e.changedTouches && e.changedTouches.length > 0) {
        const touch = e.changedTouches[0];
        createSparkle(touch.clientX, touch.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'click-sparkle';
    sparkle.textContent = ['✨', '💖', '🌸', '💗', '⭐'][Math.floor(Math.random() * 5)];
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.position = 'fixed';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '2rem';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add CSS for click sparkles
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(0);
        }
        50% {
            transform: translateY(-30px) scale(1.5);
        }
        100% {
            opacity: 0;
            transform: translateY(-60px) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// Add some confetti effect on page load
window.addEventListener('load', function() {
    setTimeout(() => {
        createConfetti();
    }, 1500);
});

function createConfetti() {
    // Reduce confetti count on mobile devices
    const isMobile = window.innerWidth <= 768;
    const confettiCount = isMobile ? 20 : 30;
    const confettiElements = ['🌸', '🌹', '💖', '💗', '✨', '🌺'];
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = confettiElements[Math.floor(Math.random() * confettiElements.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
            confetti.style.opacity = '0.8';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 3}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 6000);
        }, i * 100);
    }
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Add hover effect to the name
const nameElement = document.querySelector('.name');
if (nameElement) {
    nameElement.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    nameElement.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Add gentle background music control (optional - commented out by default)
// Uncomment if you want to add background music
/*
window.addEventListener('load', function() {
    // You can add an audio element here
    // <audio id="bgMusic" loop>
    //   <source src="your-music-file.mp3" type="audio/mpeg">
    // </audio>
    // And control it with JavaScript
});
*/
