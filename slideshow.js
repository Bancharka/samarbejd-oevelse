let slide = 1;
slidesShow(slide);

function plusSlides(n) {
  slidesShow(slide += n);
}

function currentSlide(n) {
  slidesShow(slide = n);
}

function slidesShow(n) {
  let i;
  let slides = document.getElementsByClassName("krohnSlider");
  let dots = document.getElementsByClassName("prikker");
  if (n > slides.length) {slide = 1}    
  if (n < 1) {slide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide-1].style.display = "block";  
  dots[slide-1].className += " active";
}