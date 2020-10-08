function menuCheck() {
	if(window.innerWidth < 780) {
		document.getElementById('navMenu').style.display = "none";
		document.getElementById('listOfPublications').style.display = "block";
		document.getElementById('onlineWritingDisclaimer').style.display = "block";
	} else {
		document.getElementById('navMenu').style.display = "block";
		document.getElementById('listOfPublications').style.display = "none";
		document.getElementById('onlineWritingDisclaimer').style.display = "none";
	}
}

function publicationList () {
	var x = document.getElementById('listOfPublications');
	var y = document.getElementById('onlineWritingDisclaimer');
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "none";
	} else {
		x.style.display = "block";
		y.style.display = "block";
	}
}

