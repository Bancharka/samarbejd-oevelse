// Initialiser slideIndex for hvert slideshow
let slideIndexes = [1, 1, 1];

// Antal slideshows
const numSlideshows = 3; // Opdater til antallet af slideshows

// Opret slideIndex og vis det første slide i hvert slideshow ved indlæsning
for (let i = 0; i < numSlideshows; i++) {
    showSlides(slideIndexes[i], `slideshow-container-${i + 1}`);
}

// Funktion til at håndtere klik på næste/forrige og thumbnails for hvert slideshow
function plusSlides(n, slideshowId) {
    const index = parseInt(slideshowId.split('-')[2]) - 1;
    showSlides(slideIndexes[index] += n, slideshowId);
}

// Funktion til at håndtere klik på thumbnails for hvert slideshow
function currentSlide(n, slideshowId) {
    const index = parseInt(slideshowId.split('-')[2]) - 1;
    showSlides(slideIndexes[index] = n, slideshowId);
}

// Generel funktion til at vise slides for et slideshow
function showSlides(n, slideshowId) {
    let i;
    const slides = document.getElementById(slideshowId).getElementsByClassName("mySlides");
    const thumbnails = document.getElementById(slideshowId).getElementsByClassName("thumbnail");

    if (n > slides.length) {
        n = 1;
    }

    if (n < 1) {
        n = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active");
    }

      slideIndexes[n - 1].style.display = "block";
    thumbnails[n - 1].classList.add("active");
}

// Event listener til at kalde showSlides, når alle billeder er indlæst
window.addEventListener('load', (event) => {
    // Dette kaldes, når alle ressourcer (billeder) er blevet indlæst
    
    // Slideshow 1
    slideIndexes[0] = 1;
    showSlides(slideIndexes[0], 'slideshow-container-1');

    // Slideshow 2
    slideIndexes[1] = 1;
    showSlides(slideIndexes[1], 'slideshow-container-2');

    // Slideshow 3
    slideIndexes[2] = 1;
    showSlides(slideIndexes[2], 'slideshow-container-3');
});
