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