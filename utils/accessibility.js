//acessibilty.js
// DALTONISMO
document.getElementById('color-blind-toggle').addEventListener('click', function() {
    document.getElementById('color-blind-options').classList.toggle('hidden');
});

document.querySelectorAll('#color-blind-options button').forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        const className = filter === 'normal' ? '' : `color-blind-filter ${filter}`;
        
        document.getElementById('content-wrapper').className = className;
        document.querySelector('.navbar').className = 
            `navbar ${className}`; // Mantém a classe navbar
        console.log("chegou aqui")
        
        
        document.getElementById('color-blind-options').classList.add('hidden');
    });
});


// ALTO CONTRASTE
const highContrastButton = document.getElementById('high-contrast');
const contentWrapper = document.getElementById('content-wrapper');
const navbar = document.getElementById('navbar');
const libras_scroll = document.getElementById('scroll');
const libras = document.getElementById('libras');


highContrastButton.addEventListener('click', () => {
    contentWrapper.classList.toggle('high-contrast');
    navbar.classList.toggle('high-contrast');
    libras_scroll.classList.toggle('high-contrast')
    libras.classList.toggle('high-contrast')
    libras_scroll.style.position = 'fixed';
    libras.style.position = 'fixed';

    // Seleciona todos os elementos que precisam da borda
    const elements = document.querySelectorAll('.hero, .card, .pepta-section, main, footer, .scroll-to-top, nav, .bar');

    elements.forEach(element => {
        if (element.style.border && element.style.borderRadius) {
            element.style.border = '';
            element.style.borderRadius = '';
        } else {
            element.style.border = '1px solid var(--borda-color)';
            element.style.borderRadius = '10px'; 
        }
    });
});

// TAMANHO DA FONTE
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');

let fontSize = 16;

increaseFontButton.addEventListener('click', () => {
fontSize += 2;
document.body.style.fontSize = fontSize + 'px';
});

decreaseFontButton.addEventListener('click', () => {
fontSize -= 2;
document.body.style.fontSize = fontSize + 'px';
});