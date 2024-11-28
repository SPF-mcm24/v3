//script.js
const pontos = [
    { nome: "Meliponário – Paço Municipal", endereco: "R. Leonardo Meca, 56 – Centro", lat: -23.7095169, lng: -46.412993 },
    { nome: "Meliponário – Câmara Municipal", endereco: "Rua Virgílio Gola, 40 – Pastoril", lat: -23.7112766, lng: -46.4112281 },
    { nome: "Meliponário – Espaço Lavoisier", endereco: "Av. Pref. Valdírio Prisco, 200 – Centro", lat: -23.7081625, lng: -46.4173833 },
    { nome: "Meliponário – Abelhas da Justiça", endereco: "Av. Pref. Valdírio Prisco, 150 – Centro", lat: -23.7083724, lng: -46.4175207 },
    { nome: "Meliponário – Colégio Gran Leone", endereco: "Jardim Panorama – R. Águida Tori Sortino, 90 – Centro", lat: -23.7075713, lng: -46.4087648 },
    { nome: "Meliponário – Abelhas da Saúde", endereco: "Rua Júlio Prestes 22, Jardim Luzo", lat: -23.7112517, lng: -46.38577 },
    { nome: "Meliponário – Pomar Urbano", endereco: "Estr. da Col., 1500 – Santa Luzia", lat: -23.6944009, lng: -46.3967345 },
    { nome: "Meliponário – LeBem", endereco: "Av. Benjamim Baptista Cerezoli, 580 – Pilar Velho", lat: -23.6821879, lng: -46.4074776 },
    { nome: "Meliponário – Abelhas da Educação", endereco: "R. Emerson Conde Soares Giacomini, 200 – Ouro Fino", lat: -23.6818131, lng: -46.355889 },
    { nome: "Meliponário – CRI", endereco: "R. Alferes Botacin, 171 – Centro Alto", lat: -23.7157106, lng: -46.4132153 },
    { nome: "Meliponário – Escola Municipal Edir Maria de Oliveira", endereco: "Av. Ver. Rubens Maziero, 526 – Sítio Santana", lat: -23.6747838, lng: -46.3452608 },
    { nome: "Meliponário – Toth", endereco: "R. Osvaldo Cruz, 02 – Centro", lat: -23.71965, lng: -46.4105132 },
    { nome: "Meliponário – Estancia Delfis", endereco: "R. Eugênio Galo, 145 – Centro", lat: -23.7067633, lng: -46.4084658 },
    { nome: "Meliponário – CAPS Infantil", endereco: "R. Primeiro de Maio, 108 – Jardim Itacolomy", lat: -23.706735, lng:-46.4167056 }
];



const map = L.map('map').setView([-23.7111, -46.4140], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const customIcon = L.icon({
    iconUrl: '../img/Abelhinha_sem_ferrao.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const markers = pontos.map(ponto => 
    L.marker([ponto.lat, ponto.lng], {icon: customIcon})
     .addTo(map)
     .bindPopup(`<b>${ponto.nome}</b><br>${ponto.endereco}`)
);

const pontosList = document.getElementById('pontos-lista');
const maxVisibleItems = 4; 

pontos.forEach((ponto, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${ponto.nome}:</strong> ${ponto.endereco}`;
    li.style.cursor = 'pointer';
    if (index >= maxVisibleItems) {
        li.classList.add('hidden');
    }
    li.addEventListener('click', () => {
        document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            map.setView([ponto.lat, ponto.lng], 18);
            markers[index].openPopup();
        }, 500);
    });
    pontosList.appendChild(li);
});

const verMaisBtn = document.createElement('button');
verMaisBtn.id = 'verMaisBtn';
verMaisBtn.textContent = 'Ver mais';
verMaisBtn.addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.hidden');
    hiddenItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 100); 
    });
    this.style.display = 'none'; 
});

pontosList.parentNode.appendChild(verMaisBtn);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});



let currentFontSize = 100;
const minFontSize = 80;
const maxFontSize = 150;

function changeFontSize(direction) {
  if (direction === 'increase' && currentFontSize < maxFontSize) {
    currentFontSize += 10;
  } else if (direction === 'decrease' && currentFontSize > minFontSize) {
    currentFontSize -= 10;
  }
  document.body.style.fontSize = currentFontSize + '%';
}

  
  document.getElementById('increase-font').addEventListener('click', () => changeFontSize('increase'));
  document.getElementById('decrease-font').addEventListener('click', () => changeFontSize('decrease'));
  document.getElementById('high-contrast').addEventListener('click', toggleHighContrast);
  

  document.addEventListener('DOMContentLoaded', function() {

    const colorBlindToggle = document.querySelector('#color-blind-toggle');
    const colorBlindOptions = document.querySelector('#color-blind-options');

    // Toggle menu mobile
    mobileMenu.addEventListener('click', function() {

        document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.navbar-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navbarMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Toggle opções de daltonismo
    colorBlindToggle.addEventListener('click', () => {
        colorBlindOptions.classList.toggle('hidden');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar-menu') && 
            !e.target.closest('.navbar-toggle') && 
            !e.target.closest('#color-blind-toggle')) {
            mobileMenu.classList.remove('active');
            navbarMenu.classList.remove('active');
            colorBlindOptions.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
});