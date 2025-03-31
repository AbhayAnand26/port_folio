// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for homepage intro
    if (document.querySelector('.intro-text')) {
        typeWriter(document.querySelector('.intro-text'));
    }
});

// Typing animation function
function typeWriter(element) {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    type();
}





