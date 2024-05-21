let isScrolling = false;
let startX;
let scrollLeft;

function startScroll(event) {
    console.log('Début du défilement');
    isScrolling = true;
    startX = event.pageX - document.querySelector('.wrapper').offsetLeft;
    scrollLeft = document.querySelector('.wrapper').scrollLeft;
}

function stopScroll() {
    console.log('Arrêt du défilement');
    isScrolling = false;
}

document.querySelector('.wrapper').addEventListener('mousemove', function(event) {
    if (!isScrolling) return;
    console.log('Défilement en cours');
    const x = event.pageX - document.querySelector('.wrapper').offsetLeft;
    const walk = (x - startX) * 5; // Sensibilité du défilement
    document.querySelector('.wrapper').scrollLeft = scrollLeft - walk;
});

