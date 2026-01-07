export async function loadComponents() {
    const components = [
        { id: 'hero-slot', file: 'sections/hero.html' },
        { id: 'about-slot', file: 'sections/about.html' },
        { id: 'tech-slot', file: 'sections/tech.html' },
        { id: 'projects-slot', file: 'sections/projects.html' },
        { id: 'experience-slot', file: 'sections/experience.html' },
        { id: 'education-slot', file: 'sections/education.html' },
        { id: 'hobbies-slot', file: 'sections/hobbies.html' },
        { id: 'contact-slot', file: 'sections/contact.html' },
    ];

    for (const comp of components) {
        try {
            const response = await fetch(comp.file);
            if (response.ok) {
                const html = await response.text();
                const slot = document.getElementById(comp.id);
                if (slot) slot.innerHTML = html;
            } else {
                console.warn(`Could not load ${comp.file}`);
            }
        } catch (error) {
            console.error(`Error loading ${comp.file}:`, error);
        }
    }
}