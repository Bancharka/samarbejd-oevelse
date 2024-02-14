let slide = 1;
banan(slide);

function plusSlides(n) {
  banan(slide += n);
}

function prik(n) {
  banan(slide = n);
}

function banan(n) {
  let i;
  let hentElementer = document.getElementsByClassName("krohnSlider");
  let dots = document.getElementsByClassName("prikker");
  if (n > hentElementer.length) 
    {slide = 1}    
  if (n < 1) 
  {slide = hentElementer.length}
  
  for (i = 0;  i< hentElementer.length; i++) {
    hentElementer[i].style.display = "none";  
  }
  hentElementer[slide-1].style.display = "block";  
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Fjerne orange fade fra knapper ikke i brug
  }
  dots[slide-1].className += " active";  // gør knapperne faded orange


}


