import React from "react";
import ImageMarquee from "../ImageMarquee";
import { Projects as projectdata } from "../../assets/Projects";
export default function Projects() {
	const images = projectdata?.map((project) => project?.img?.[0]);

	return (
		<div className="hprojects homebox overflow-hidden relative lg:p-6 md:p-6 p-4">
			<a href="/portfolio">
			<div className="cristik lg:text-4xl  md:text-4xl  text-2xl text-white">
				Projects
			</div>
			<p className="opacity-75 lg:text-[16px] md:text-[10px] leading-6 text-yellow-200 font-thin">
				Take a Look at the Various Projets that i have made →
			</p>
			</a>
			<div className="absolute bottom-[-60px] ">
				<ImageMarquee images={images} />
			</div>
		</div>
	);
}
