
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- content is to make sure that the website functions on small device and big ones.will work responsively-->
		<title>Julia's Portfolio Website</title>

<!-- font can u used from google font -->
		<script src="https://kit.fontawesome.com/635d52bfb9.js" crossorigin="anonymous"></script>

		<link rel="stylesheet" type="text/css" href="styleportfolio.css">

	 	<script type="text/javascript" src="index.js"></script>	
</head>
	<body>
		<header>
			<div class="logo">
				<a href="#" class="nav__item">
				<img class="logo" src="JuliaLogo.jpg" alt=""></a>	
			</div>
			<!-- Top NNavigation Bar -->
			<div class="navbar">
				<div class="nav--list">
				  <a class="nav-link nav-link-grow-up" href="#home">Home</a>
				  <a class="nav-link nav-link-grow-up" href="#services">Services</a>
				  <a class="nav-link nav-link-grow-up" href="#about">About</a>
				  <a class="nav-link nav-link-grow-up" href="#work">Work</a>
				</div>
			</div>

		    <!-- Hamburger Navigation -->
			<button class="nav-toggle" aria-label="toggle navigation">
				<span class="hamburger"></span>
			</button>

			<!--Navigation-->
			<nav class="nav">
				<ul class="nav__list">
					<li class="nav__item"><a href="#home" class="nav__link">Home</a></li>M
					<li class="nav__item"><a href="#services" class="nav__link">My Services</a></li>
					<li class="nav__item"><a href="#about" class="nav__link">About Me</a></li>
					<li class="nav__item"><a href="#work" class="nav__link">My Work</a></li>
				</ul>
			</nav>
		</header>

		<!-- Introduction -->
		<section class="intro" id="intro">   <!-- id are usally can be used for anchoring and styling and js functionality -->
			<h1 class="section__title section__title--intro"> 
				Hi, I am <strong> Julia Katz </strong>	
			</h1> <!-- the double -- shows that it's a modifer class, so it's soing to modify the section-title class to be a little bit different fromt he default section title bc there are some changes that will be made--> <!-- title of the section -->
			<p class="section__subtitle section__subtitle--intro"> Front-End Developer </p>
			<img src="images/code-pic.jpg" alt="a picture of Julia Katz smiling" class ="intro-img"> <!--jpig.jpg-->
		</section>

		<!-- My Services -->
		<section class="my-services" id="services">
			<h2 class="section__title section__title--services"> What I Do</h2>
			<div class="services">
				<div class="service">
					<h3>Restaurant Menu</h3>
					<p>I had created a restrant menu using CSS flexbox and functional buttons to show each menu section.</p>
				</div> <!-- service -->

				<div class="service">
					<h3>Games</h3>
					<p>I had created a couple of games, such as Rock Paper Scissors, Tic Tac Toe and Snake Game.</p>
				</div> <!-- service -->

				<div class="service">
					<h3>Tribute Page</h3>
					<p>I had created a Tribute Page of someone whom I adore and has inspired me and my life.</p>
				</div> <!-- service -->
			</div> <!-- services -->

			<a href="#work" class="btn"> My Work</a>
		</section> 

		<!-- About Me -->

		<section class="about-me" id="about">
			<h2 class="section__title section__title--about">Who I Am</h2>
			<p class="section__subtitle section__subtitle--about">Web Developer - UI Designer</p>

			<div class="about-me__body"> <!-- subsection of about-me -->
				<p>talk about yourself</p>
				<p>talk about yourself here too</p>
			</div>

			<img src="images/jpic.jpg" alt="a picture of Julia Katz smiling" class="about-me-img"> <!-- find a new pic -->
		
		
			<div class="wrapper">
			<div class="shape-1"></div>
			<div class="shape-2"></div>
			<div class="container">
				<h2>My Skills</h2>
				<div class="skills">
					<div class="details">
						<span>HTML</span><span>60%</span> <!--change the %-->
					</div>
					<div class="bar">
						<div id="html-bar"></div>
					</div>
				</div>
				<div class="skills">
					<div class="details">
						<span>CSS</span><span>40%</span> <!--change the %-->
					</div>
					<div class="bar">
						<div id="css-bar"></div>
					</div>
				</div>
				<div class="skills">
					<div class="details">
						<span>JavaScript</span><span>20%</span> <!--change the %-->
					</div>
					<div class="bar">
						<div id="js-bar"></div>
					</div>
				</div>
				<div class="skills">
					<div class="details">
						<span>React</span><span>0%</span> <!--change the %-->
					</div>
					<div class="bar">
						<div id="react-bar"></div>
					</div>
				</div>
				<div class="skills">
					<div class="details">
						<span>Angular</span><span>0%</span> <!--change the %-->
					</div>
					<div class="bar">
						<div id="angular-bar"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
		<!-- My Work --> <!-- Add school Projects -->
		<section class="my-work" id="work">
			<h2 class="section__title section__title--work">My Work</h2>
			<p class="section__subtitle section__subtitle--work">A Selection of My Range of Work</p>

			<div class="portfolio">
				<!-- Portfolio item 01 -->
				<a href="portfolio-real-estate-project.html#work" class="portfolio-item">
					<img src="images/Real-Estate-PrideSign.jpg" alt="Pride" class="portfolio-img"></a> 

				<!-- Portfolio item 02 -->
				<a href="portfolio-restaurant-project.html" class="portfolio-item">
					<img src="images/Spanish-diner-pic.jpg" alt="Diner" class="portfolio-img"></a> 

				<!-- Portfolio item 03 -->
				<a href="portfolio-game-project.html" class="portfolio-item">
					<img src="images/game-pic2.jpg" alt="RPS" class="portfolio-img"></a> 

				<!-- Portfolio item 04 -->
				<a href="portfolio-tech-project.html" class="portfolio-item">
					<img src="images/TechSource-pic.jpg" alt="code-pic" class="portfolio-img"></a>

				<!-- Portfolio item 05 -->
				<a href="portfolio-tribute-project.html" class="portfolio-item">
					<img src="images/tribute-pic.jpg" alt="code-detail-pic" class="portfolio-img"></a> <!-- find a new pic -->
			</div>
		</section>

		<!-- Footer -->
		<footer class="footer">
			
			<a href="mailto:julia.ruth.katz77@gamil.com" class="footer__link">julia.ruth.katz77@gmail.com</a>
			<br>
			<ul class="social-list">
				<li class="links">
					<a href="portfolio.html" align="center">Home Page</a>
				</li>

				<li class= "social-list-item">
					<a class="social-list-link" href="https://github.com/jj7jj77">
						<i class="fab fa-github"></i>
					</a>
				</li>
				<li class= "social-list-item">
					<a class="social-list-link" href="https://www.linkedin.com/in/julia-katz027">
						<i class="fab fa-linkedin"></i>
					</a>
				</li>
				<li class= "social-list-item">
					<a class="social-list-link" href="http://jksites.s3-website-us-east-1.amazonaws.com/Index.html">
						<i class="fab fa-aws"></i>
					</a>
				</li>
				<li class= "social-list-item">
					<a class="social-list-link" href="https://codepen.io/jj7jj7">
						<i class="fab fa-codepen"></i>
					</a>
				</li>
			</ul>
		</footer>
		<!-- <script ype="text/javascript" src="js/index.js"></script> --> <!-- type="text/javascript" -->
	</body>
</html>



