export function initUI() {
    /* --- MOBILE MENU --- */
    const hamburgerBtn = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');

    if(hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            navLinks.style.display = isFlex ? 'none' : 'flex';
            
            // Apply styles dynamically for mobile view
            if (!isFlex) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#020203';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid #222';
                navLinks.style.zIndex = '1000';
            }
        });
    }

    /* --- NAVBAR SCROLL EFFECT --- */
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if(nav) {
            if(window.scrollY > 50) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        }
    });

    /* --- LIGHTBOX --- */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Attach to window so HTML onClick="..." works
    window.openLightbox = (imageSrc) => {
        if(lightbox && lightboxImg) {
            lightbox.style.display = "flex";
            lightboxImg.src = imageSrc;
            document.body.style.overflow = "hidden";
        }
    };

    window.closeLightbox = () => {
        if(lightbox) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };

    if(lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) window.closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") window.closeLightbox();
        });
    }
}