$("#s6").hover(function(){$("#s6").addClass("ruotalo")});
$("#s1").hover(function(){$("#s1").addClass("ruotalo")});
$("#s2").hover(function(){$("#s2").addClass("ruotalo")});
$("#s3").hover(function(){$("#s3").addClass("ruotalo")});
$("#s4").hover(function(){$("#s4").addClass("ruotalo")});
$("#s5").hover(function(){$("#s5").addClass("ruotalo")});
$("#s7").hover(function(){$("#s7").addClass("ruotalo")});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";

}
