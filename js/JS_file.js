function hamburgerTransform(){
	btn = document.getElementById("hamburgerBTN");
	mobileMenu = document.getElementById("mobileMenu");
	overlay = document.getElementById("overlay");

	if( btn.classList.contains('open')){
		btn.classList.remove('open');
		mobileMenu.classList.remove('show-mobile-menu');

	} else {
		btn.classList.add('open');
		mobileMenu.classList.add('show-mobile-menu');
	}

	if( overlay.classList.contains('overlay')){
		overlay.classList.remove('overlay');
	} else {
		overlay.classList.add('overlay');
	}
}
