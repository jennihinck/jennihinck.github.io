function subMenus(selection,menuName) {

	var x = document.getElementsByClassName("menuItem");
	var y = document.getElementById("mainMenu");
	var z = document.getElementById("subMenu");
	var k = document.getElementsByClassName("subMenuItem");


	for (var i = 0; i < x.length; i++) {
		x[i].classList.remove("active");
	}

	for (var i = 0; i < k.length; i++) {
		k[i].classList.remove("active");
	}

	selection.classList.add("active");

	if (window.innerWidth < 780) {

	if (menuName !== "none") {
		var j = document.getElementById(menuName).children;
		y.style.transform = "translateY(-50%)";
		z.style.display = "block";

		for (var i = 0; i < j.length; i++) {
			j[i].classList.add("active");
		}


	} else {
		z.style.display = "none";
		y.style.transform = "initial";
	}} else {
		if (menuName !== "none") {
			var j = document.getElementById(menuName).children;

			if (menuName == "writingSubMenu") {
				z.style.bottom = "45%";
			} else {
				z.style.bottom = "30%";
			}

			z.style.display = "block";

			for (var i = 0; i < j.length; i++) {
				j[i].classList.add("active");
			}
		} else {
			z.style.display = "none";
			y.style.transform = "initial";
		}
	}

}

function menuCheck() {

	var x = document.getElementsByClassName("menuItem active");
	var y = document.getElementById("mainMenu");
	var z = document.getElementById("subMenu");


	
	if (window.innerWidth > 780) {
		y.style.transform = "initial";
		if (x[0].id == "writingMenu") {
			z.style.bottom = "45%";
		} else if (x[0].id == "designMenu") {
			z.style.bottom = "30%";
		} else {
			z.style.display = "none";
		}
	} else {
		if (x[0].id !== "aboutMenu") {
			y.style.transform = "translateY(-50%)";
			z.style.display = "block";
			z.style.bottom = "0";
		} else {
			z.style.display = "none";
			y.style.transform = "initial";
		}
	}
}



function popUpMenus(selection,direction) {
	var x = document.getElementById(selection);

	if (direction == 'open') {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function contentSwitch(selection) {
	var x = document.getElementById(selection);
	var y = document.getElementsByClassName("mainSection");

	for (var i = 0; i < y.length; i++) {
		y[i].classList.remove("active");
	}

	x.classList.add("active");
}

function designInfoClick(selection) {

	var x = selection.parentElement;
	var y = x.children;

	if (y[1].style.display == "block") {
		y[1].style.display = "none";
	} else {
		y[1].style.display = "block";
	}

}






