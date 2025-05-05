import React, { useState } from "react";

export default function Portfolio({ sheetHandler }) {
	const [isSelected, setIsSelected] = useState("All");

	const Projects = [
		{
			title: "Synkerr",
			categories: ["App Development"],
			img: "project-1.jpg",
			description: "",
			tools: ["HTML", "CSS", "JavaScript", "React"],
			
		},
		{
			title: "PostGrad Pinnacle",
			categories: ["Web Development"],
			img: "https://sahil-mengji.github.io/portfolio/static/media/postgrad.fb601ef5ceaae2bfe483.jpg",
			description: "",
			tools: ["HTML", "CSS", "JavaScript", "React"],
		},
		{
			title: "Student IMS",
			categories: ["App Development"],
			img: "https://sahil-mengji.github.io/portfolio/static/media/imsui.312a0e54f7d2dfb578b7.png",
			description: "",
			tools: ["HTML", "CSS", "JavaScript", "React"],
		},
		{
			title: "Postgrad Pinnacle",
			categories: ["App Development"],
			img: "https://sahil-mengji.github.io/portfolio/static/media/postgradui.fa99a0dfd65d4785d3ee.png",
			description: "",
			tools: ["HTML", "CSS", "JavaScript", "React"],
		},
		{
			title: "VijayLaxmi Industries",
			categories: ["Web Development"],
			img: "https://sahil-mengji.github.io/portfolio/static/media/vijaylaxmi.6af183891426f134c1f0.gif",
			description: "",
			tools: ["HTML", "CSS", "JavaScript", "React"],
		},
		{
			title: "Association of Computer Engineers (Logo)",
			categories: ["Graphic Design"],
			img: "https://sahil-mengji.github.io/portfolio/static/media/ace.a1649f3531021055947a.png",
			description: "",
			tools: ["HTML", "CSS", "JavaScript", "React"],
		},
		{
			title: "PostGrad Pinnacle (Logo)",
			categories: ["Graphic Design"],
			img: "https://sahil-mengji.github.io/portfolio/static/media/postgrad.0637777c8fdfcd83106a.png",
			description: "",
			tools: ["HTML", "CSS", "JavaScript", "React"],
		},
		{
			title: "Student IMS (Logo)",
			categories: ["Graphic Design"],
			img: "https://sahil-mengji.github.io/portfolio/static/media/ims.ad25e3c3d626d0490897.png",
			description: "",
			tools: ["HTML", "CSS", "JavaScript", "React"],
		},
		{
			title: "Algorythms (Logo)",
			categories: ["Graphic Design"],
			img: "https://sahil-mengji.github.io/portfolio/static/media/algorythm.1d15fc2d27d3ec54882f.png",
			description: "",
			tools: ["HTML", "CSS", "JavaScript", "React"],
		},
	];

	const filterProjects =
		isSelected === "All"
			? Projects
			: Projects.filter((project) => project.categories.includes(isSelected));

	return (
		<article className="portfolio active" data-page="portfolio">
			<header>
				<h2 className="h2 article-title">Portfolio</h2>
			</header>

			<section className="projects">
				<ul className="filter-list">
					<li className="filter-item">
						<button
							className={isSelected == "All" ? "active" : ""}
							onClick={() => setIsSelected("All")}
							data-filter-btn
						>
							All
						</button>
					</li>

					<li className="filter-item">
						<button
							className={isSelected == "Web Development" ? "active" : ""}
							data-filter-btn
							onClick={() => setIsSelected("Web Development")}
						>
							Web Development
						</button>
					</li>

					<li className="filter-item">
						<button
							className={isSelected == "App Development" ? "active" : ""}
							data-filter-btn
							onClick={() => setIsSelected("App Development")}
						>
							App Development
						</button>
					</li>

					<li className="filter-item">
						<button
							className={isSelected == "UI/UX Design" ? "active" : ""}
							data-filter-btn
							onClick={() => setIsSelected("UI/UX Design")}
						>
							UI/UX Design
						</button>
					</li>

					<li className="filter-item">
						<button
							className={isSelected == "Graphic Design" ? "active" : ""}
							data-filter-btn
							onClick={() => setIsSelected("Graphic Design")}
						>
							Graphic Design
						</button>
					</li>
				</ul>

				<div className="filter-select-box">
					<button className="filter-select" data-select>
						<div className="select-value" data-selecct-value>
							Select category
						</div>

						<div className="select-icon">
							<ion-icon name="chevron-down"></ion-icon>
						</div>
					</button>

					<ul className="select-list">
						<li className="select-item">
							<button data-select-item>All</button>
						</li>

						<li className="select-item">
							<button data-select-item>Web design</button>
						</li>

						<li className="select-item">
							<button data-select-item>Applications</button>
						</li>

						<li className="select-item">
							<button data-select-item>Web development</button>
						</li>
					</ul>
				</div>

				<ul className="project-list">
					{filterProjects.map((project) => (
						<li
							className="project-item  active cursor-pointer"
							data-filter-item
							onClick={() => sheetHandler(project)}
						>
							<a href="#">
								<figure className="project-img bg-[#31313b] cursor-pointer">
									<div className="project-item-icon-box cursor-pointer">
										<ion-icon name="eye-outline"></ion-icon>
									</div>

									<img
										src={project.img}
										alt="finance"
										loading="lazy"
										style={{ aspectRatio: "1.5 ", objectFit: "contain" }}
									/>
								</figure>

								<h3 className="project-title">{project.title}</h3>

								<p className="project-category">{project.categories}</p>
							</a>
						</li>
					))}
				</ul>
			</section>
		</article>
	);
}
