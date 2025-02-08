```
// Smooth Scroll für Navigation
const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialisierung der Karte
const map = L.map('mapContainer').setView([51.1657, 10.4515], 6); // Deutschland zentriert

// OpenStreetMap Layer hinzufügen
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Beispiel-Marker hinzufügen (Berlin)
L.marker([52.5200, 13.4050]).addTo(map)
    .bindPopup('Georg Forster in Berlin')
    .openPopup();
