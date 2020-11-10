function dropdownMenu() {
	var x = document.getElementById('navMenu')
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
};

function menuCheck() {
	if(window.innerWidth < 780) {
		document.getElementById('navMenu').style.display = "none";
	} else {
		document.getElementById('navMenu').style.display = "block";
	}
}


function dropdownSubMenu(element, direction) {
	var x = element.children;
	var y = x[0].children;

	if (window.innerWidth > 780) {
		if (direction == "open") {
			y[0].classList.add ("active");
			x[1].classList.add ("active");
		} else {
			y[0].classList.remove ("active");
			x[1].classList.remove ("active");
		}
	} 
}	