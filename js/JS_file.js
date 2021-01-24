
function hamburgerTransform(){
	btn = document.getElementById("hamburgerBTN");
	overlay = document.getElementById("overlay");
	body = document.body;

	// mobile menu
	btn.classList.toggle('open');
	overlay.classList.toggle('show-mobile-menu')
	body.classList.toggle('overflow-hidden')

	// fade in and fade out for mobile menu
	if( overlay.classList.contains('show-mobile-menu')){
		overlay.classList.add('fade-in')
		overlay.classList.remove('fade-out')
	} else{
		overlay.classList.remove('fade-in')
		overlay.classList.add('fade-out')
	}
}
window.onload = function () {
	window.onscroll = function() {myFunction()};
	header = document.getElementById("myHeader");
	sticky = header.offsetTop;
	body = document.body;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
	  	body.classList.add("padding")
	    header.classList.add("sticky");
	  } else {
	  	body.classList.remove("padding")
	    header.classList.remove("sticky");
	  }
	}
}
