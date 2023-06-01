import { Container, Row, Col } from "react-bootstrap";

function Header({ title, subtitle }) {
	return (
		<>
			<header className="text-center my-5">
				<h1>{title}</h1>
				<h2>{subtitle}</h2>
			</header>
			<hr />
		</>
	);
}

function Heading({ title }) {
	return (
		<>
			<h3 className="mb-4">{title}</h3>
		</>
	);
}

function AboutMe({ content }) {
	return (
		<>
			<section className="py-3">
				<Heading title={"About Me"} />
				{content}
			</section>
			<hr />
		</>
	);
}

function Skills({ content }) {
	return (
		<>
			<section className="py-3">
				<Heading title={"Skills"} />
				{content}
			</section>
			<hr />
		</>
	);
}

function Languages({ content }) {
	return (
		<>
			<section className="py-3">
				<Heading title={"Languages"} />
				{content}
			</section>
			<hr />
		</>
	);
}

function Experience({ content }) {
	return (
		<>
			<section className="py-3">
				<Heading title={"Experience"} />
				{content}
			</section>
			<hr />
		</>
	);
}

function Education({ content }) {
	return (
		<>
			<section className="py-3">
				<Heading title={"Education"} />
				{content}
			</section>
		</>
	);
}

function Footer({ author, year }) {
	return (
		<>
			<hr />
			<footer className="text-center my-4">
				<p>
					Copyright &copy; {year} {author}. Made with 💖 by {author}.
				</p>
			</footer>
		</>
	);
}

function App() {
	return (
		<Container>
			<Header
				title={"Chang Wang Ngen"}
				subtitle={"React Full Stack Web Developer"}
			/>
			<Row className="justify-content-center">
				<Col md={8}>
					<AboutMe content={<AboutMeContent />} />
					<Skills content={<SkillsContent />} />
					<Languages content={<LanguagesContent />} />
					<Experience content={<ExperienceContent />} />
					<Education content={<EducationContent />} />
				</Col>
			</Row>
			<Footer
				author={"Chang Wang Ngen"}
				year={new Date().getFullYear()}
			/>
		</Container>
	);
}

function AboutMeContent() {
	return (
		<>
			<p>
				From a young age, I have always been fascinated by technology
				and its potential to change the world. I vividly remember the
				first time I used a computer and how amazed I was by its ability
				to process information and connect people across the globe.
			</p>
			<p>
				As I grew older, I realized that technology was more than just a
				tool for communication and entertainment, it was also a powerful
				tool for solving problems and creating positive change in the
				world. That&apos;s what made me want to learn coding.
			</p>
			<p>
				My goal is to become a React Full Stack Web Developer and use my
				coding skills to make a meaningful impact in people&apos;s lives
				by creating innovative solutions to real-world problems. I
				believe that technology has the power to transform the way we
				live and work, and I want to be a part of that transformation.
			</p>
			<p>
				Currently, I am learning a variety of tech skills including
				HTML, CSS, JavaScript, React, SQL, Express, and Firebase, among
				others. I am excited about the endless possibilities that these
				technologies offer and how they can be used to create dynamic,
				user-friendly, and responsive applications.
			</p>
			<p>
				Whether it&apos;s developing a new app or website, creating a
				platform for social change, or solving complex business
				problems, I am passionate about leveraging technology to create
				innovative solutions. I am excited to continue my journey in the
				tech world and to see where this path takes me.
			</p>
		</>
	);
}

function SkillsContent() {
	return (
		<>
			<h5>Full-Stack Web Development</h5>
			<ul>
				<li>
					Develop Web Applications using Front-End & Back-End
					Technologies
				</li>
			</ul>
			<h5>Front-End Web Development</h5>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>Bootstrap</li>
				<li>JavaScript</li>
				<li>React</li>
			</ul>
			<h5>Back-End Web Development</h5>
			<ul>
				<li>Node.js</li>
				<li>SQL</li>
				<li>Express</li>
				<li>Firebase</li>
			</ul>
		</>
	);
}

function LanguagesContent() {
	return (
		<>
			<ul>
				<li>English</li>
				<li>Mandarin</li>
				<li>Cantonese</li>
				<li>Malay</li>
			</ul>
		</>
	);
}

function ExperienceContent() {
	return (
		<>
			<h5>Coding Bootcamp Student at Sigma School</h5>
			<p>May 2023 - Current</p>
		</>
	);
}

function EducationContent() {
	return (
		<>
			<h5>
				Complete Software Development Online Bootcamp by Sigma School
			</h5>
			<p>May 2023 - Current</p>
		</>
	);
}

export default App;

// import { Container, Row, Col } from "react-bootstrap";

// function Header() {
// 	return (
// 		<>
// 			<header className="text-center my-5">
// 				<h1>Chang Wang Ngen</h1>
// 				<h2>React Full Stack Web Developer</h2>
// 			</header>
// 			<hr />
// 		</>
// 	);
// }

// function AboutMe() {
// 	return (
// 		<>
// 			<section className="py-3">
// 				<h3 className="mb-4">About Me</h3>
// <p>
// 	From a young age, I have always been fascinated by
// 	technology and its potential to change the world. I vividly
// 	remember the first time I used a computer and how amazed I
// 	was by its ability to process information and connect people
// 	across the globe.
// </p>
// <p>
// 	As I grew older, I realized that technology was more than
// 	just a tool for communication and entertainment, it was also
// 	a powerful tool for solving problems and creating positive
// 	change in the world. That&apos;s what made me want to learn
// 	coding.
// </p>
// <p>
// 	My goal is to become a React Full Stack Web Developer and
// 	use my coding skills to make a meaningful impact in
// 	people&apos;s lives by creating innovative solutions to
// 	real-world problems. I believe that technology has the power
// 	to transform the way we live and work, and I want to be a
// 	part of that transformation.
// </p>
// <p>
// 	Currently, I am learning a variety of tech skills including
// 	HTML, CSS, JavaScript, React, SQL, Express, and Firebase,
// 	among others. I am excited about the endless possibilities
// 	that these technologies offer and how they can be used to
// 	create dynamic, user-friendly, and responsive applications.
// </p>
// <p>
// 	Whether it&apos;s developing a new app or website, creating
// 	a platform for social change, or solving complex business
// 	problems, I am passionate about leveraging technology to
// 	create innovative solutions. I am excited to continue my
// 	journey in the tech world and to see where this path takes
// 	me.
// </p>
// 			</section>
// 			<hr />
// 		</>
// 	);
// }

// function Skills() {
// 	return (
// 		<>
// 			<section className="py-3">
// 				<h3 className="mb-4">Skills</h3>
// <h5>Full-Stack Web Development</h5>
// <ul>
// 	<li>
// 		Develop Web Applications using Front-End & Back-End
// 		Technologies
// 	</li>
// </ul>
// <h5>Front-End Web Development</h5>
// <ul>
// 	<li>HTML</li>
// 	<li>CSS</li>
// 	<li>Bootstrap</li>
// 	<li>JavaScript</li>
// 	<li>React</li>
// </ul>
// <h5>Back-End Web Development</h5>
// <ul>
// 	<li>Node.js</li>
// 	<li>SQL</li>
// 	<li>Express</li>
// 	<li>Firebase</li>
// </ul>
// 			</section>
// 			<hr />
// 		</>
// 	);
// }

// function Languages() {
// 	return (
// 		<>
// 			<section className="py-3">
// 				<h3 className="mb-4">Languages</h3>
// 				<ul>
// 					<li>English</li>
// 					<li>Mandarin</li>
// 					<li>Cantonese</li>
// 					<li>Malay</li>
// 				</ul>
// 			</section>
// 			<hr />
// 		</>
// 	);
// }

// function Experience() {
// 	return (
// 		<>
// 			<section className="py-3">
// 				<h3 className="mb-4">Experience</h3>
// 				<h5>Coding Bootcamp Student at Sigma School</h5>
// 				<p>May 2023 - Current</p>
// 			</section>
// 			<hr />
// 		</>
// 	);
// }

// function Education() {
// 	return (
// 		<>
// 			<section className="py-3">
// 				<h3 className="mb-4">Education</h3>
// 				<h5>
// 					Complete Software Development Online Bootcamp by Sigma
// 					School
// 				</h5>
// 				<p>May 2023 - Current</p>
// 			</section>
// 		</>
// 	);
// }

// function Footer() {
// 	return (
// 		<>
// 			<hr />
// 			<footer className="text-center my-4">
// 				<p>
// 					Copyright &copy; {new Date().getFullYear()} Chang Wang Ngen.
// 					Made with 💖 by Chang Wang Ngen.
// 				</p>
// 			</footer>
// 		</>
// 	);
// }

// function App() {
// 	return (
// 		<Container>
// 			<Header />
// 			<Row className="justify-content-center">
// 				<Col md={8}>
// 					<AboutMe />
// 					<Skills />
// 					<Languages />
// 					<Experience />
// 					<Education />
// 				</Col>
// 			</Row>
// 			<Footer />
// 		</Container>
// 	);
// }

// export default App;
