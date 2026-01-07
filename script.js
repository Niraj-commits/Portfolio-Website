// Import the modules (Note the .js extension is mandatory)
import { loadComponents } from './js/loader.js';
import { initUI } from './js/ui.js';
import { initCanvas } from './js/canvas.js';
import { initAnimations } from './js/animations.js';

// MAIN EXECUTION
document.addEventListener('DOMContentLoaded', async () => {
    
    // 1. Fetch and inject HTML
    await loadComponents();

    // 2. Initialize Features (now that HTML exists)
    initUI();
    initCanvas();
    initAnimations();
    
    console.log("System Online // Modules Loaded");
});