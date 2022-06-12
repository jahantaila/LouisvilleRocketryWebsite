// NEED TO FIX - WANT TYPING ANIMATION TO START WHEN USER SCROLLS TO THE ABOUT-US SECTION

// window.addEventListener('scroll', function() {
	var element = document.querySelector('#about-us');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 5 && position.bottom <= window.innerHeight) {
		new TypeIt("#competetivetext", { 
      lifeLike: true, 
      speed: 0 
    })
    .type("C")
    .pause(300)
    .type("o")
    .pause(300)
    .type("m")
    .pause(300)
    .type("p")
    .pause(300)
    .type("e")
    .pause(300)
    .type("t")
    .pause(300)
    .type("i")
    .pause(300)
    .type("t")
    .pause(300)
    .type("i")
    .pause(300)
    .type("v")
    .pause(300)
    .type("e")
    .go();
	}

	
});






