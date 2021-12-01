const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll ('.nav__link'); // creates a node list to find all the links


navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
}); //everytime you click on the button, it should add the class


navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})
