export function initAnimations() {
    /* --- SCROLL REVEAL --- */
    const revealElements = document.querySelectorAll('.reveal, .reveal-left');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    /* --- TERMINAL TYPING EFFECT --- */
    const terminalPanel = document.querySelector('.about-text-panel');
    const typeElements = document.querySelectorAll('.type-this');
    let hasTyped = false; 

    function typeText(element, text, speed = 5) { 
        return new Promise((resolve) => {
            let i = 0;
            element.innerHTML = ""; 
            element.classList.add('typing-cursor'); 

            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed + Math.random() * 10);
                } else {
                    element.classList.remove('typing-cursor'); 
                    resolve(); 
                }
            }
            type();
        });
    }

    if (terminalPanel) {
        const typingObserver = new IntersectionObserver(async (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting && !hasTyped) {
                    hasTyped = true; 
                    for (const el of typeElements) {
                        const text = el.getAttribute('data-text');
                        if(text) await typeText(el, text, 5); 
                    }
                    typingObserver.unobserve(entry.target);
                }
            }
        }, { threshold: 0.3 });
        
        typingObserver.observe(terminalPanel);
    }
}