var slides = document.querySelectorAll('#slides .slide_text');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide_text';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide_text showing';
}
function playSlideshow() {
  slideInterval = setInterval(nextSlide,2000);
};