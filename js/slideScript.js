
var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var autoSlides = setInterval(movingSlides, 6000); 


function plusSlides(n) {
	clearInterval (autoSlides);	
	advanceSlide(n);
}

function advanceSlide(x) {
	var i;
	if (x === 1) {
		for (i = 0; i < slides.length; i++) {
			if (i === slideIndex-1) {
				dots[i].style.backgroundColor = "#d6d5c9d9";
			} else {
				slides[i].style.right = "-100vw;"
				dots[i].style.backgroundColor = "#d6d5c9d9";
			}
		}
		slides[slideIndex-1].style.animation = "slideOutLeft 2s ease-in-out 0s 1 forwards";
		slideIndex += x;
		if (slideIndex > slides.length) {slideIndex = 1}
		if (slideIndex < 1) {slideIndex = slides.length}
		slides[slideIndex-1].style.animation = "slideInLeft 2s ease-in-out 0s 1 forwards";	
		dots[slideIndex-1].style.backgroundColor = "#000000";
		return slideIndex;
	} else {
		for (i = 0; i < slides.length; i++) {
			if (i === slideIndex-1) {
				dots[i].style.backgroundColor = "#d6d5c9d9";
			} else {
				slides[i].style.right = "100vw;"
				dots[i].style.backgroundColor = "#d6d5c9d9";
			}
		}
		slides[slideIndex-1].style.animation = "slideOutRight 2s ease-in-out 0s 1 forwards";
		slideIndex += x;
		if (slideIndex > slides.length) {slideIndex = 1}
		if (slideIndex < 1) {slideIndex = slides.length}
		slides[slideIndex-1].style.animation = "slideInRight 2s ease-in-out 0s 1 forwards";	
		dots[slideIndex-1].style.backgroundColor = "#000000";
		return slideIndex; 
	}
}

function movingSlides() {
	var i;
	if (window.innerWidth < 780) {return}
	for (i = 0; i < slides.length; i++) {
		dots[i].style.backgroundColor = "#d6d5c9d9";
	}
	slides[slideIndex-1].style.animation = "slideOutLeft 2s ease-in-out 0s 1 forwards";
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	if (slideIndex < 1) {slideIndex = slides.length}
	slides[slideIndex-1].style.animation = "slideInLeft 2s ease-in-out 0s 1 forwards";	
	dots[slideIndex-1].style.backgroundColor = "#000000";
}