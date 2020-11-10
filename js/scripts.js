function dropdownMenu() {
	var x = document.getElementById('navMenu')
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
};


function menuCheck() {
	var x = document.getElementsByClassName('imageHeader')
	if(window.innerWidth < 780) {
		document.getElementById('navMenu').style.display = "none";
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
	} else {
		document.getElementById('navMenu').style.display = "block";
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "block";
		}
	}
}

function photoBox(element,direction) {
	var parent = element.parentNode;
	var x = parent.getElementsByClassName('photoInfo');
	var y = parent.getElementsByClassName('imageHeader');
	if (direction == "in") {
		x[0].style.display = "block";
		if (window.innerWidth > 780) {
		y[0].style.display = "none";}
	} else {
		x[0].style.display = "none";
		if (window.innerWidth >780) {
		y[0].style.display = "block";}
	}
}

function expandContent(section) {
	var x = document.getElementsByClassName(section);
	for (var i = 0; i < x.length; i++) {
		if(x[i].style.display == "block") {
			x[i].style.display = "none";
		} else {
			x[i].style.display = "block";
		}
	}
}